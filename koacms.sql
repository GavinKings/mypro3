/*
Navicat MySQL Data Transfer

Source Server         : 本机Mysql
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : koacms

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-04-29 18:00:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for books
-- ----------------------------
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of books
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `nickname` varchar(128) DEFAULT NULL COMMENT '用户昵称',
  `email` varchar(128) DEFAULT NULL COMMENT '用户邮箱',
  `password` varchar(64) DEFAULT NULL COMMENT '用户密码',
  `openid` varchar(128) DEFAULT NULL COMMENT '微信小程序openid',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `openid` (`openid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'shusong', '763455318@qq.com', '123456', null, '2020-04-17 15:01:21', '2020-04-17 15:01:26', null);
INSERT INTO `users` VALUES ('2', 'shusong', '763455138@qq.com', '$2a$10$TpQzaxgYO5QocgQptDhq.OXBFwwKQ0w3aokWT1fvUAZZwbML7lo7y', null, '2020-04-26 15:42:48', '2020-04-26 15:42:48', null);
