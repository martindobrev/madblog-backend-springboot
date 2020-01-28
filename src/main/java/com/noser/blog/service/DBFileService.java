package com.noser.blog.service;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.imageio.ImageIO;

import com.noser.blog.api.BlogFilePageDTO;
import com.noser.blog.mapper.FileMapper;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.noser.blog.domain.BlogFile;
import com.noser.blog.domain.BlogFileView;
import com.noser.blog.domain.Thumbnail;
import com.noser.blog.repository.FileRepository;
import com.noser.blog.repository.ThumbnailRepository;
import com.noser.blog.security.CheckGetAllFilesPermission;

import lombok.extern.slf4j.Slf4j;
import net.coobird.thumbnailator.Thumbnails;

@Slf4j
@Service
public class DBFileService implements FileService {

    private final FileRepository fileRepository;
    private final ThumbnailRepository thumbnailRepository;
    private final FileMapper fileMapper;

    public DBFileService(FileRepository fileRepository, ThumbnailRepository thumbnailRepository, FileMapper fileMapper) {
        this.fileRepository = fileRepository;
        this.thumbnailRepository = thumbnailRepository;
        this.fileMapper = fileMapper;
    }

    @Override
    public Long saveFile(BlogFile file) {
        if (file == null || file.getData() == null || file.getName() == null) {
            return null;
        }

        file = fileRepository.save(file);
        return file.getId();
    }

    @Override
    public BlogFile getFile(Long id) {
        return fileRepository.findById(id).get();
    }

    @Override
    //@CheckGetAllFilesPermission
    public Iterable<BlogFileView> getFiles(String name) {
        return fileRepository.findBlobFileView();
    }

    @Override
    public boolean deleteFile(Long id) {
        return fileRepository.delete(id) == 1;
    }

    @Override
    public BlogFilePageDTO getFilePage(long pageNumber) {
        return this.fileMapper.domainPage2dto(
                this.fileRepository.findBlobFilePage(PageRequest.of((int) pageNumber, 20))
        );
    }

    @Override
    public BlogFilePageDTO getSearchFilePage(long pageNumber, String query) {
        return this.fileMapper.domainPage2dto(this.fileRepository.findBlobFilePageByName(PageRequest.of((int) pageNumber, 20), query));
    }

    @Override
    @Cacheable("thumbnails")
    public Thumbnail getThumbnail(BlogFile file, int size) {
        if (file == null || file.getData() == null || file.getId() == null || size < 10 || size > 10000) {
            return null;
        }

        String thumbnailId = String.format("%d_%d", file.getId(), size);

        if (this.thumbnailRepository.existsById(thumbnailId)) {
            return this.thumbnailRepository.findById(thumbnailId).get();
        }

        try {
            return createThumbnail(thumbnailId, file.getId(), file.getData(), size);
        } catch (IOException exception) {
            log.error("Cannot create thumbnail from file {}", file.getName());
            log.error(exception.getMessage());
        }

        return null;
    }

    private Thumbnail createThumbnail(final String id, final Long imageId, byte[] imageData, int size) throws IOException {
        Thumbnail thumbnail = Thumbnail.builder().id(id)
                .data(resize(imageData, size))
                .imageId(imageId)
                .build();

        return thumbnailRepository.save(thumbnail);
    }

    private byte[] resize(final byte[] originalData, int size) throws IOException {
        InputStream imageIn = new ByteArrayInputStream(originalData);
        BufferedImage bufferedImage = Thumbnails.of(imageIn)
                .size(size, size)
                .outputFormat("png")
                .imageType(BufferedImage.TYPE_INT_ARGB)
                .asBufferedImage();
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(bufferedImage, "png", baos);
        return baos.toByteArray();
    }

}
