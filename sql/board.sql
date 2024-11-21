# 게시물 테이블 생성

CREATE TABLE board
(
    id       INT PRIMARY KEY AUTO_INCREMENT,
    title    VARCHAR(300)  NOT NULL,
    content  VARCHAR(5000) NOT NULL,
    writer   VARCHAR(20)   NOT NULL REFERENCES member (id),
    inserted DATETIME DEFAULT NOW()
);

SELECT *
FROM board;

# 페이지 연습용 복붙
INSERT INTO board
    (title, content, writer)
SELECT title, content, writer
FROM board;

SELECT COUNT(*)
FROM board;