package guoren.xintianyou.web.core.config;

import javax.sql.DataSource;

import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 * ClassName: DatabaseMultiConfig <br/>
 * 多数据源设置 @Primary 表示默认 <br/>
 * date: 2015年2月4日 上午9:51:11 <br/>
 *
 * @author he.sun
 * @version
 * @since JDK 1.7
 */
@Configuration
public class DatabaseMultiConfig {
    @Bean(name = "dbsdb1")
    @Primary
    @ConfigurationProperties(prefix = "db1.datasource")
    public DataSource primaryDataSource() {
        return DataSourceBuilder.create().build();
    }

    @Bean(name = "dbsdb2")
    @ConfigurationProperties(prefix = "db2.datasource")
    public DataSource secondaryDataSource() {
        return DataSourceBuilder.create().build();
    }

    @Bean(name = "jdbcDb1")
    @Primary
    public JdbcTemplate jdbcTemplate1(DataSource dsUsers) {
        return new JdbcTemplate(primaryDataSource());
    }

    @Bean(name = "jdbcDb2")
    public JdbcTemplate jdbcTemplate2(DataSource dsUsers) {
        return new JdbcTemplate(secondaryDataSource());
    }
}
