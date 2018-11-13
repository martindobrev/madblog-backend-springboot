package com.noser.blog.audit;

import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

@Target(ElementType.METHOD)
public @interface CheckGetAllFilesPermission {
	
}
