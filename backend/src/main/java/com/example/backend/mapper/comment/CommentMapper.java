package com.example.backend.mapper.comment;

import com.example.backend.dto.comment.Comment;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface CommentMapper {

    @Insert("""
            INSERT INTO comment
            (board_id, member_id, comment)
             VALUES (#{boardId}, #{memberId}, #{comment})
            """)
    int insert(Comment comment);

    @Select("""
            SELECT *
            FROM comment
            WHERE board_id=#{boardId}
            ORDER BY id
            """)
    List<Comment> selectByBoardId(Integer boardId);

    @Select("""
            SELECT *
            FROM comment
            WHERE id=#{id}
            """)
    Comment selectById(Integer id);

    @Delete("""
            DELETE
            FROM comment
            WHERE id=#{id}
            """)
    int deleteById(Integer id);
}