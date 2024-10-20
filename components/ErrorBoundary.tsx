'use client'

import React, { ErrorInfo, ReactNode } from 'react'
import { Button } from "@/components/ui/button"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-pampas">
          <h2 className="text-2xl font-bold text-te-papa-green mb-4">Oops, there was an error!</h2>
          <Button
            onClick={() => this.setState({ hasError: false })}
            className="bg-chelsea-cucumber text-white hover:bg-te-papa-green"
          >
            Try again
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary