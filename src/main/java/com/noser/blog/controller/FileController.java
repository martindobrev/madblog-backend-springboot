package com.noser.blog.controller;

import com.noser.blog.api.BlogFileDTO;
import com.noser.blog.domain.BlogFile;
import com.noser.blog.mapper.FileMapper;
import com.noser.blog.service.FileService;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.entity.ContentType;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.websocket.server.PathParam;
import java.security.Principal;
import java.time.LocalDateTime;

@Slf4j
@RestController
@RequestMapping("/api/v1/")
public class FileController {

  private final FileService fileService;
  private final FileMapper fileMapper;

  public FileController(FileService fileService, FileMapper fileMapper) {
    this.fileService = fileService;
    this.fileMapper = fileMapper;
  }

  @PostMapping(value = "/files", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
  public @ResponseBody BlogFileDTO uploadFile(@RequestParam("file") MultipartFile file, Principal principal, Authentication authentication) throws Exception {
    log.info("File uploaded: {}", file.getName());

    final BlogFile blogFile = BlogFile.builder()
        .name(file.getName())
        .authorId(principal != null ? principal.getName(): null)
        .data(file.getBytes())
        .uploaded(LocalDateTime.now())
        .size(file.getSize())
        .fileType(file.getContentType())
        .build();
    blogFile.setId(this.fileService.saveFile(blogFile));
    return this.fileMapper.domain2dto(blogFile);
  }

  @GetMapping(value = "/files/{id}")
  public @ResponseBody ResponseEntity<byte[]> getFile(@PathVariable Long id) {
    final BlogFile file = this.fileService.getFile(id);
    final HttpHeaders httpHeaders = new HttpHeaders();
    if (file == null) {
      return new ResponseEntity<>(null, httpHeaders, HttpStatus.NOT_FOUND);
    }
    httpHeaders.add("Content-Type", ContentType.getByMimeType(file.getFileType()).toString());
    ResponseEntity<byte[]> responseEntity = new ResponseEntity<>(file.getData(), httpHeaders, HttpStatus.OK);
    return responseEntity;

  }
}
