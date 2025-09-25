import React, { Component, ReactNode } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Button from './Button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo: errorInfo.componentStack
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <View className="flex-1 justify-center items-center px-8 bg-white">
          <Text className="text-2xl font-robotobold text-red-600 mb-4 text-center">
            Oops! Something went wrong
          </Text>
          
          {__DEV__ && (
            <ScrollView className="w-full mb-6 max-h-64">
              <View className="bg-gray-100 p-4 rounded-lg">
                <Text className="text-sm font-roboto mb-2 text-gray-800">
                  Error: {this.state.error?.message}
                </Text>
                {this.state.errorInfo && (
                  <Text className="text-xs font-mono text-gray-600">
                    {this.state.errorInfo}
                  </Text>
                )}
              </View>
            </ScrollView>
          )}
          
          <Text className="text-center font-roboto text-gray-600 mb-6">
            We're sorry for the inconvenience. Please try again or contact support if the problem persists.
          </Text>
          
          <Button 
            label="Try Again" 
            onPress={this.handleReset}
            className="w-full max-w-xs"
          />
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;