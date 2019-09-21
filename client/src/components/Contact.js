import React, { useState } from 'react';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const Contact = () => {
  const [emailData, setEmailData] = useState({
    email: '',
    name: '',
    text: ''
  });

  const { email, name, text } = emailData;

  const onChange = e => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify({ email, name, text });
      await axios.post('/api/email/', body, config);
      console.log('success!');
      setEmailData({ ...emailData, email: '', name: '', text: '' });
    } catch (err) {
      console.log(err.response.statusText);
    }
  };

  return (
    <div style={{ background: '#e6e6e6', textAlign: 'center' }}>
      <Typography style={{ paddingTop: '25px' }} variant='h2'>
        Contact Me
      </Typography>
      <div
        style={{
          maxWidth: '960px',
          margin: 'auto',
          paddingBottom: '25px',
          paddingTop: '25px'
        }}
      >
        <form onSubmit={e => onSubmit(e)}>
          <Input
            style={{
              fontSize: '25px',
              margin: '5px',
              width: '45%',
              minWidth: '300px'
            }}
            type='email'
            value={email}
            name='email'
            placeholder='Email here'
            onChange={e => onChange(e)}
            autoComplete='off'
          />
          <br />
          <Input
            style={{
              fontSize: '25px',
              margin: '5px',
              width: '45%',
              minWidth: '300px'
            }}
            type='name'
            value={name}
            name='name'
            placeholder='Company/Name'
            onChange={e => onChange(e)}
            autoComplete='off'
          />
          <br />
          <Input
            style={{
              fontSize: '25px',
              margin: '5px',
              width: '45%',
              minWidth: '300px'
            }}
            type='text'
            value={text}
            name='text'
            placeholder="Let me know what's up"
            onChange={e => onChange(e)}
            autoComplete='off'
          />
          <div style={{ margin: 'auto', width: '45%', textAlign: 'right' }}>
            <Button
              style={{
                marginTop: '25px',
                fontSize: '15px',
                backgroundColor: '#495057',
                padding: '5px',
                color: 'white'
              }}
              type='submit'
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
