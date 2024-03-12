package com.noser.blog.controller;

import java.io.IOException;
import java.security.Principal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Optional;

import com.noser.blog.api.BlogFilePageDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.http.entity.ContentType;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.noser.blog.api.BlogFileCollectionDTO;
import com.noser.blog.api.BlogFileDTO;
import com.noser.blog.domain.BlogFile;
import com.noser.blog.domain.Thumbnail;
import com.noser.blog.mapper.FileMapper;
import com.noser.blog.service.FileService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/v1/")
@Tag(name = "File", description = "Controller responsible for handling file operations")
public class FileController {

  private final FileService fileService;
  private final FileMapper fileMapper;
  
  public FileController(FileService fileService, FileMapper fileMapper) {
    this.fileService = fileService;
    this.fileMapper = fileMapper;
  }


  @Operation(summary = "upload a file", description = """
  Only single file upload is supported. The file must be uploaded as MultipartFile with the name 'file'. Maximal size of the file is 5MB.
  Uploading bigger files will result in an error.
  """)
  @PostMapping(value = "/files", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
  public @ResponseBody BlogFileDTO uploadFile(@RequestParam("file") MultipartFile file, Principal principal, Authentication authentication) throws Exception {
    log.info("File uploaded: {}", file.getOriginalFilename());

    final BlogFile blogFile = BlogFile.builder()
        .name(file.getOriginalFilename())
        .authorId(principal != null ? principal.getName(): null)
        .data(file.getBytes())
        .uploaded(LocalDateTime.now())
        .size(file.getSize())
        .fileType(file.getContentType())
        .build();
    blogFile.setId(this.fileService.saveFile(blogFile));
    return this.fileMapper.domain2dto(blogFile);
  }

  @Operation(summary = "returns the actual file or it's thumbnail", description = """
  If size is specified, a thumbnail of the existing image is returned. For example, if you provide size=100, you will get
  a thumbnail of the file with max-width or max-height = 100px. The aspect ratio of the original image is preserved.
  All thumbnails are returned in JPEG format. Original PNG or GIF images remain unchanged.
  """)
  @Cacheable("images")
  @GetMapping(value = "/files/{id}")
  public @ResponseBody ResponseEntity<byte[]> getFile(@PathVariable Long id, @RequestParam Optional<Integer> size) {
    final BlogFile file = this.fileService.getFile(id);
    final HttpHeaders httpHeaders = new HttpHeaders();

    if (file == null) {
      return new ResponseEntity<>(null, httpHeaders, HttpStatus.NOT_FOUND);
    }

    if (size.isPresent()) {
      final Thumbnail thumbnail = fileService.getThumbnail(file, size.get());
      if (thumbnail.getData() != null) {
    	  httpHeaders.add("Content-Type", ContentType.IMAGE_JPEG.getMimeType());
    	  return new ResponseEntity<>(thumbnail.getData(), httpHeaders, HttpStatus.OK);
      }
    }

    httpHeaders.add("Content-Type", ContentType.getByMimeType(file.getFileType()).toString());
    return new ResponseEntity<>(file.getData(), httpHeaders, HttpStatus.OK);
  }

  @Operation(summary = "returns information about the available files", description = "Returns only meta information about the files, not the files themselves")
  @GetMapping(value = "/files")
  public @ResponseBody BlogFileCollectionDTO getFiles() {
    final BlogFileCollectionDTO blogFileCollectionDTO = BlogFileCollectionDTO.builder().blogFiles(new ArrayList<>()).build();
    this.fileService.getFiles(null)
        .forEach(blogFileView -> blogFileCollectionDTO.getBlogFiles().add(this.fileMapper.domainView2dto(blogFileView)));
    return blogFileCollectionDTO;
  }

  @Operation(summary = "deletes a file by id")
  @DeleteMapping(value = "/files/{id}")
  public boolean deleteFile(@PathVariable Long id) {
    return this.fileService.deleteFile(id);
  }

  @Operation(summary = "get file information in pages", description = "Same as /get/files but with pagination")
  @GetMapping(value = "/filepage/{number}")
  public BlogFilePageDTO getFilePage(@PathVariable Long number, @RequestParam("name") Optional<String> nameQuery) {
    if (nameQuery.isPresent()) {
        return this.fileService.getSearchFilePage(number, nameQuery.get());
    }
    return this.fileService.getFilePage(number);
  }
}
