import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Header from '../src/components/Header';
import { Grid, Row, Col } from 'react-flexgrid';

storiesOf('Header', module)
  .add('display type bold', () => (
    <Grid fluid>
      <Row>
        <Col xs={12} md={3}>
          <Header type='display' bold>Display Bold</Header>
          <Header type='display'>Display Bold</Header>
        </Col>
        <Col>
          <Header type='display' bold>Display Bold</Header>
          <Header type='display'>Display Bold</Header>
        </Col>
        <Col>
          <Header type='display' bold>Display Bold</Header>
          <Header type='display'>Display Bold</Header>
        </Col>
      </Row>
    </Grid>
  ))
  .add('display type', () => (
    <Header type='display'>Display</Header>
  ))
  .add('headline type bold', () => (
    <Header type='headline' bold>Headline Bold</Header>
  ))
  .add('headline type', () => (
    <Header type='headline'>Headline</Header>
  ))
  .add('title type bold', () => (
    <Header type='title' bold>Title Bold</Header>
  ))
  .add('title type', () => (
    <Header type='title'>Title</Header>
  ))
  .add('subtitle type bold', () => (
    <Header type='subtitle' bold>Subtitle Bold</Header>
  ))
  .add('subtitle type', () => (
    <Header type='subtitle'>Subtitle</Header>
  ))
  .add('body type bold', () => (
    <Header type='body' bold>Body Bold</Header>
  ))
  .add('body type', () => (
    <Header type='body'>Body</Header>
  ))
  .add('caption type bold', () => (
    <Header type='caption' bold>Caption Bold</Header>
  ))
  .add('caption type', () => (
    <Header type='caption'>Caption</Header>
  ))
  .add('footnote type bold', () => (
    <Header type='footnote' bold>Footnote Bold</Header>
  ))
  .add('footnote type', () => (
    <Header type='footnote'>Footnote</Header>
  ));
