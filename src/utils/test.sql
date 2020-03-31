SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `sex` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', 'jacson', '0');
INSERT INTO `admin` VALUES ('2', 'jacson', '0');
INSERT INTO `admin` VALUES ('3', 'jacson', '0');
INSERT INTO `admin` VALUES ('4', 'jacson', '0');
INSERT INTO `admin` VALUES ('5', 'jacson', '0');
INSERT INTO `admin` VALUES ('6', 'jacson', '0');
INSERT INTO `admin` VALUES ('7', 'jacson', '0');
INSERT INTO `admin` VALUES ('8', 'jacson', '0');
INSERT INTO `admin` VALUES ('9', 'jacson', '0');
INSERT INTO `admin` VALUES ('10', 'jacson', '0');
INSERT INTO `admin` VALUES ('11', 'jacson', '0');
INSERT INTO `admin` VALUES ('12', 'jacson', '0');
INSERT INTO `admin` VALUES ('13', 'jacson', '0');
INSERT INTO `admin` VALUES ('14', 'jacson', '0');
INSERT INTO `admin` VALUES ('15', 'jacson', '0');
INSERT INTO `admin` VALUES ('16', 'jacson', '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('00000000001', '你好', '15');
INSERT INTO `user` VALUES ('00000000002', '我不好', '16');
INSERT INTO `user` VALUES ('00000000003', '他好', '17');
