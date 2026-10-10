-- ==============================================================
-- iTech MM Solutions (Intas MN Technology) - MySQL Schema
-- ==============================================================

CREATE DATABASE IF NOT EXISTS `itechmm` 
  CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;

USE `itechmm`;

-- 1. Admin Users Table
CREATE TABLE IF NOT EXISTS `admin_users` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(60) NOT NULL UNIQUE,
  `email` VARCHAR(150) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `full_name` VARCHAR(100) NOT NULL,
  `role` ENUM('superadmin', 'admin', 'editor') NOT NULL DEFAULT 'admin',
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `last_login_at` DATETIME NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_admin_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Company Information & Settings Table
CREATE TABLE IF NOT EXISTS `company_info` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `company_name` VARCHAR(150) NOT NULL DEFAULT 'iTech MM Solutions',
  `brand_name` VARCHAR(150) NOT NULL DEFAULT 'Intas MN Technology',
  `tagline` VARCHAR(255) NULL,
  `about_text` TEXT NULL,
  `mission` TEXT NULL,
  `vision` TEXT NULL,
  `primary_email` VARCHAR(150) NOT NULL DEFAULT 'contact@itechmm.com',
  `primary_phone` VARCHAR(50) NOT NULL DEFAULT '+95 9 123 456 789',
  `secondary_phone` VARCHAR(50) NULL,
  `address` VARCHAR(255) NOT NULL DEFAULT 'Yangon, Myanmar',
  `working_hours` VARCHAR(100) NOT NULL DEFAULT 'Monday - Saturday: 9:00 AM - 6:00 PM',
  `facebook_url` VARCHAR(255) NULL,
  `linkedin_url` VARCHAR(255) NULL,
  `github_url` VARCHAR(255) NULL,
  `updated_by` INT UNSIGNED NULL,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `fk_company_updated_by` FOREIGN KEY (`updated_by`) 
    REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Services Table
CREATE TABLE IF NOT EXISTS `services` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(100) NOT NULL UNIQUE,
  `title` VARCHAR(150) NOT NULL,
  `short_description` VARCHAR(255) NOT NULL,
  `full_description` TEXT NULL,
  `category` VARCHAR(60) NOT NULL DEFAULT 'Software',
  `icon_name` VARCHAR(60) NOT NULL DEFAULT 'Code',
  `features_json` JSON NULL,
  `sort_order` INT NOT NULL DEFAULT 0,
  `is_published` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_service_slug` (`slug`),
  INDEX `idx_service_published` (`is_published`, `sort_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Contact Inquiries Table
CREATE TABLE IF NOT EXISTS `contact_inquiries` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(50) NULL,
  `subject` VARCHAR(200) NOT NULL,
  `message` TEXT NOT NULL,
  `service_interested` VARCHAR(100) NULL,
  `status` ENUM('new', 'in_review', 'responded', 'archived') NOT NULL DEFAULT 'new',
  `admin_notes` TEXT NULL,
  `ip_address` VARCHAR(45) NULL,
  `user_agent` VARCHAR(255) NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_inquiry_status` (`status`, `created_at`),
  INDEX `idx_inquiry_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
