import React from 'react';
import App, { Container } from 'next/app';
import Header from '../components/header';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <link type="text/css" rel="stylesheet"  href="/static/style.css" />
        <div id="site-content">
        <Header/> 
        <div className="content">
          <Component {...pageProps} />
        </div>
        </div>
      </Container>
    )
  }
}