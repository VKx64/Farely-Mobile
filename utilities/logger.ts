// Simple logging utility for consistent logging across the app
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  data?: any;
}

class Logger {
  private isDevelopment = __DEV__;

  private formatMessage(level: LogLevel, message: string, data?: any): LogEntry {
    return {
      level,
      message,
      timestamp: new Date().toISOString(),
      data
    };
  }

  debug(message: string, data?: any) {
    if (this.isDevelopment) {
      console.log(`[DEBUG] ${message}`, data || '');
    }
  }

  info(message: string, data?: any) {
    console.info(`[INFO] ${message}`, data || '');
  }

  warn(message: string, data?: any) {
    console.warn(`[WARN] ${message}`, data || '');
  }

  error(message: string, error?: any) {
    console.error(`[ERROR] ${message}`, error || '');
    
    // In production, you might want to send errors to a crash reporting service
    if (!this.isDevelopment && error) {
      // TODO: Send to crash reporting service (Sentry, Bugsnag, etc.)
    }
  }

  // Log API calls
  apiCall(method: string, url: string, data?: any) {
    this.debug(`API ${method.toUpperCase()}: ${url}`, data);
  }

  // Log user actions
  userAction(action: string, data?: any) {
    this.info(`User Action: ${action}`, data);
  }
}

export const logger = new Logger();
export default logger;