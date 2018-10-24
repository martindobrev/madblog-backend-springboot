package com.noser.blog.controller;

import com.noser.blog.api.ArticleCollectionDTO;
import com.noser.blog.api.ArticleDTO;
import com.noser.blog.api.BlogFileDTO;
import com.noser.blog.domain.Article;
import com.noser.blog.domain.BlogFile;
import com.noser.blog.service.ArticleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.http.codec.multipart.Part;
import org.springframework.security.core.Authentication;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.validation.Valid;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("/api/v1/")
public class ArticleController {

  private final ArticleService articleService;

  @Autowired
  public ArticleController(ArticleService articleService) {
    this.articleService = articleService;
  }

  @GetMapping("/articles")
  public Mono<ArticleCollectionDTO> getAllArticles(Principal principal, Authentication authentication) {
    log.info("Principal is: {}", principal);
    log.info("Authentication is: {}", authentication);
    return this.articleService.getAllArticles(principal, authentication);
  }

  @GetMapping("/articles/{articleId}")
  public Mono<ArticleDTO> getArticle(@PathVariable Long articleId, Principal principal, Authentication authentication) {
    return this.articleService.getArticle(articleId, principal, authentication);
  }

  @PostMapping("/articles")
  public Mono<ArticleDTO> createArticle(@Valid @RequestBody Article article, Principal principal, Authentication authentication) {
    return this.articleService.createArticle(article, principal, authentication);
  }

  @PutMapping("/articles/{articleId}")
  public @ResponseBody Mono<ArticleDTO> editArticle(@PathVariable Long articleId, @RequestBody Article article, Principal principal, Authentication authentication) throws Exception {
    return this.articleService.editArticle(article, principal, authentication);
  }

  @GetMapping("/user")
  public Principal getPrincipal(Principal principal) {
    return principal;
  }

  @PostMapping(value = "/files", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
  public Flux<BlogFileDTO> uploadFile(@RequestBody Flux<Part> parts) {

    return parts
        .cast(FilePart.class) // convert the flux to FilePart
        .flatMap(this::saveFile); // save each file and flatmap it to a flux of results
  }


  private Mono<BlogFileDTO> saveFile(FilePart filePart) {
    try {
      final File uploadedFile = File.createTempFile(filePart.filename(), ".tmp");
      filePart.transferTo(uploadedFile);
      Paths.get(uploadedFile.getAbsolutePath());
      BlogFile file = BlogFile.builder()
          .name(filePart.filename())
          .data(Files.readAllBytes(Paths.get(uploadedFile.getAbsolutePath())))
          .build();

      return Mono.just(BlogFileDTO.builder()
          .id(file.getId())
          .name(file.getName())
          .size(uploadedFile.length())
          .build());

    } catch (IOException ioException) {

    }
    return Mono.empty();
  }

  @PostMapping(value = "/files_description", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  Mono<String> requestBodyFlux(@RequestBody Flux<Part> parts) {
    return partFluxDescription(parts);
  }

  private static String partMapDescription(MultiValueMap<String, Part> partsMap) {
    return partsMap.keySet().stream().sorted()
        .map(key -> partListDescription(partsMap.get(key)))
        .collect(Collectors.joining(",", "Map[", "]"));
  }

  private static Mono<String> partFluxDescription(Flux<? extends Part> partsFlux) {
    return partsFlux.log().collectList().map(ArticleController::partListDescription);
  }

  private static String partListDescription(List<? extends Part> parts) {
    return parts.stream().map(ArticleController::partDescription)
        .collect(Collectors.joining(",", "[", "]"));
  }

  private static String partDescription(Part part) {
    return part instanceof FilePart ? part.name() + ":" + ((FilePart) part).filename() : part.name();
  }

  /**
   * Post multipart file upload handler
   *
   * @param parts
   * @return

  @PostMapping(path = "/presentation/uploadFiles", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
  Mono<List<PresentationFile>> uploadFiles(@RequestBody Flux<Part> parts) {
    log.info("Upload request received!");
    return parts
        .cast(FilePart.class)
        .flatMap(this::createFile).filter(file -> file != null)
        .map(this::fileToPresentationFile).collectList();
  }
   */
}
