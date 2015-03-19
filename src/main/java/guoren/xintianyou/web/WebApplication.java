package guoren.xintianyou.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;

/**
 * ClassName: WebApplication <br/>
 * Function: TODO ADD FUNCTION. <br/>
 * date: 2015年2月4日 上午9:28:17 <br/>
 *
 * @author he.sun
 * @version
 * @since JDK 1.7
 */
@EnableAutoConfiguration
@SpringBootApplication
public class WebApplication extends SpringBootServletInitializer {

    /**
     * TODO 自动配置
     * 
     * @see org.springframework.boot.context.web.SpringBootServletInitializer#configure(org.springframework.boot.builder.SpringApplicationBuilder)
     */
    @Override
    protected SpringApplicationBuilder configure(
            SpringApplicationBuilder application) {
        return application.sources(WebApplication.class);
    }

    /**
     * main:独立运行主类<br/>
     *
     * @author he.sun
     * @param args
     * @throws Exception
     * @since JDK 1.7
     */
    public static void main(String[] args) throws Exception {
        SpringApplication.run(WebApplication.class, args);
    }
}
