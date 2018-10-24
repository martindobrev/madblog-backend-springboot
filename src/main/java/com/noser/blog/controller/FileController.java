package com.noser.blog.controller;

import com.noser.blog.api.BlogFileDTO;
import com.noser.blog.domain.BlogFile;
import com.noser.blog.mapper.FileMapper;
import com.noser.blog.service.FileService;
import lombok.extern.slf4j.Slf4j;
import net.coobird.thumbnailator.Thumbnailator;
import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.makers.ThumbnailMaker;
import net.coobird.thumbnailator.util.ThumbnailatorUtils;
import org.apache.http.entity.ContentType;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.security.Principal;
import java.time.LocalDateTime;
import java.util.Optional;

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
  public @ResponseBody ResponseEntity<byte[]> getFile(@PathVariable Long id, @RequestParam Optional<Integer> size) throws IOException {
    final BlogFile file = this.fileService.getFile(id);
    final HttpHeaders httpHeaders = new HttpHeaders();

    if (file == null) {
      return new ResponseEntity<>(null, httpHeaders, HttpStatus.NOT_FOUND);
    }

    if (size.isPresent()) {
      httpHeaders.add("Content-Type", ContentType.IMAGE_JPEG.getMimeType());
      return new ResponseEntity<>(createThumbnail(file, size.get()), httpHeaders, HttpStatus.OK);
    }

    httpHeaders.add("Content-Type", ContentType.getByMimeType(file.getFileType()).toString());
    return new ResponseEntity<>(file.getData(), httpHeaders, HttpStatus.OK);
  }

  private byte[] createThumbnail(final BlogFile file, int size) throws IOException {
    InputStream imageIn = new ByteArrayInputStream(file.getData());
    BufferedImage bufferedImage = Thumbnails.of(imageIn).size(size, size).asBufferedImage();
    ByteArrayOutputStream baos = new ByteArrayOutputStream();
    ImageIO.write(bufferedImage, "jpg", baos);
    return baos.toByteArray();
  }
}
