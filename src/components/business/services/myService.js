import {Agent, localBaseUrl} from '@/components/vueFem2';
import apiList from './apiList.js';
/* eslint-disable */

Agent.manager.executor('a.b.c', async function({d,f}){
  
  return new Promise((r)=>{
    setTimeout(()=>{
      r(['111','222','333'])
    },3000);
  })
  
  return Agent.ajax(`${localBaseUrl}/api/v1/abc`, {d,f});
});

apiList.forEach(api => {
  const executorName = api;
  Agent.manager.executor(executorName, async function({d,f}) {
    return Agent.ajax(`${localBaseUrl}${api}`, {d,f});
  });
});