package com.noser.blog.config;

import java.sql.Types;

import org.hibernate.dialect.PostgreSQLDialect;
import org.hibernate.type.descriptor.sql.BinaryTypeDescriptor;
import org.hibernate.type.descriptor.sql.SqlTypeDescriptor;

public class PostgreSQLDialectCustom extends PostgreSQLDialect {

	public PostgreSQLDialectCustom() {
		System.out.println("Init PostgreSQLDialectCustom");
		registerColumnType(Types.BLOB, "bytea");

	}

	@Override
	public SqlTypeDescriptor remapSqlTypeDescriptor(SqlTypeDescriptor sqlTypeDescriptor) {
		if (sqlTypeDescriptor.getSqlType() == java.sql.Types.BLOB) {
			return BinaryTypeDescriptor.INSTANCE;
		}
		
		if (sqlTypeDescriptor.getSqlType() == java.sql.Types.CLOB) {
			return BinaryTypeDescriptor.INSTANCE;
		}

		return super.remapSqlTypeDescriptor(sqlTypeDescriptor);
	}

}
