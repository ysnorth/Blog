package com.ape.blog.handler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

/**
 * @ClassName ControllerExceptionHandler
 * @Description 异常信息拦截
 * @Date 2020/9/9 12:00
 * @Author Toxic
 */
@ControllerAdvice
public class ControllerExceptionHandler {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @ExceptionHandler(Exception.class)
    public ModelAndView exceptionHandler(HttpServletRequest request,Exception e) throws Exception {

        logger.error("Request URL : {},Exception :{}",request.getRequestURL(),e);
        //判断异常的状态  不拦截404
        if (AnnotationUtils.findAnnotation(e.getClass(), ResponseStatus.class)!=null ){
            throw e;
        }
        ModelAndView mv  = new ModelAndView();
        mv.addObject("url",request.getRequestURL());
        mv.addObject("exception",e);
        mv.setViewName("error/error");

        return mv;
    }

}
