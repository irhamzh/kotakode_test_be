import { HttpStatus } from '@nestjs/common';
import ApiError from './ApiError';

/**
 * Admin-Related Errors
 */
export const NoStaffFoundError = () => {
  throw new ApiError(
    HttpStatus.NOT_FOUND,
    'Staff not found',
    'Staff with the specified ID is not found',
  );
};

export const StaffAlreadyExistsError = () => {
  throw new ApiError(
    HttpStatus.CONFLICT,
    'Staff already exists',
    'There already exists an staff with this email',
  );
};

// Add new attendance-related Errors

export const NoAttendanceFoundError = () => {
  throw new ApiError(
    HttpStatus.NOT_FOUND,
    'Attendance not found',
    'Attendance with the specified ID is not found',
  );
};

export const DifferentStaffError = () => {
  throw new ApiError(
    HttpStatus.FORBIDDEN,
    'Staff cannot update other staff data',
    'Forbidden to change another staff data',
  );
};

export const StaffClockedInError = () => {
  throw new ApiError(
    HttpStatus.CONFLICT,
    'Staff is currently still clocked in',
    'There is an ongoing attendance by staff',
  );
};

export const StaffClockedOutError = () => {
  throw new ApiError(
    HttpStatus.CONFLICT,
    'Staff is currently clocked out',
    'There is no new attendance by staff',
  );
};

/**
 * Auth-Related Errors
 */

export const WrongPasswordError = () => {
  throw new ApiError(
    HttpStatus.UNAUTHORIZED,
    'Wrong password',
    'The password you provided is incorrect',
  );
};
