import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import http from 'axios'
import $ from 'jquery'
import './utils/fontSize'
import "./style/public.styl"
Component.prototype.$http = http;
Component.prototype.$ = $;
ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);