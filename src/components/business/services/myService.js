/* eslint-disable */
import {Agent, localBaseUrl} from '@/components/vueFem2';
import apiList from './apiList.js';

Agent.manager.executor('a.b.c', async function({d,f}){
  
  return new Promise((r)=>{
    setTimeout(()=>{
      r(['111','222','333'])
    },3000);
  })
  
  return Agent.ajax(`${localBaseUrl}/api/v1/abc`, {d,f});
});

