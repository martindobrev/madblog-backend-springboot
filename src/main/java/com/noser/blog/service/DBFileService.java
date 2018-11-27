package com.noser.blog.service;

import org.springframework.stereotype.Service;

import com.noser.blog.domain.BlogFile;
import com.noser.blog.repository.FileRepository;
import com.noser.blog.security.CheckGetAllFilesPermission;

@Service
public class DBFileService implements FileService {

	private final FileRepository fileRepository;

	public DBFileService(FileRepository fileRepository) {
		this.fileRepository = fileRepository;
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
	@CheckGetAllFilesPermission
	public Iterable<BlogFile> getFiles(String name) {
		return fileRepository.findAll();
	}

	@Override
	public boolean deleteFile(Long id) {
		if (!fileRepository.existsById(id)) {
			return false;
		}

		fileRepository.deleteById(id);
		return true;
	}

}
