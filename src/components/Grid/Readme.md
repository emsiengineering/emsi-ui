Fluid one column
```
const styles = {
  backgroundColor: '#efeeed',
  textAlign: 'center',
  padding: '1rem',
  height: '30rem'
};
<Grid fluid>
  <Row>
    <Col xs={12}>
      <div style={styles}/>
    </Col>
  </Row>
</Grid>
```
Fluid three columns
```
const styles = {
  backgroundColor: '#efeeed',
  textAlign: 'center',
  padding: '1rem',
  height: '30rem'
};
<Grid fluid>
  <Row>
    <Col xs={12} md={4}>
      <div style={styles} />
    </Col>
    <Col xs={12} md={4}>
      <div style={styles} />
    </Col>
    <Col xs={12} md={4}>
      <div style={styles} />
    </Col>
  </Row>
</Grid>
```
Fluid mixed columns
```
const styles = {
  backgroundColor: '#efeeed',
  textAlign: 'center',
  padding: '1rem',
  height: '30rem'
};
<Grid fluid>
  <Row>
    <Col xs={12} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} md={10}>
      <div style={styles} />
    </Col>
    <Col xs={12} md={1}>
      <div style={styles} />
    </Col>
  </Row>
</Grid>
```
Fluid twelve columns
```
const styles = {
  backgroundColor: '#efeeed',
  textAlign: 'center',
  padding: '1rem',
  height: '30rem'
};
<Grid fluid>
  <Row>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
  </Row>
</Grid>
```
Fluid nested Grid
```
const styles = {
  backgroundColor: '#efeeed',
  textAlign: 'center',
  padding: '1rem',
  height: '30rem'
};
const styles2 = {
  backgroundColor: '#2be',
  textAlign: 'center',
  padding: '1rem',
  height: '30rem'
};
<Grid fluid>
  <Row>
    <Col xs={12} sm={6}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6}>
    <Grid fluid>
      <Row>
        <Col xs={12} sm={3}>
          <div style={styles2} />
        </Col>
        <Col xs={12} sm={9}>
          <div style={styles2} />
        </Col>
      </Row>
    </Grid>
    </Col>
  </Row>
</Grid>
```
Offset Grid columns
```
const styles = {
  backgroundColor: '#efeeed',
  textAlign: 'center',
  padding: '1rem',
  height: '30rem'
};
<Grid fluid>
  <Row>
    <Col xs={12} md={5}>
      <div style={styles} />
    </Col>
    <Col xs={12} md={3} mdOffset={2}>
      <div style={styles} />
    </Col>
  </Row>
</Grid>
```
Non Fluid Grid twelve column
```
const styles = {
  backgroundColor: '#efeeed',
  textAlign: 'center',
  padding: '1rem',
  height: '30rem'
};
<Grid>
  <Row>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
    <Col xs={12} sm={6} md={1}>
      <div style={styles} />
    </Col>
  </Row>
</Grid>
```
