import {manager, Agent, localBaseUrl} from '@/components/fem2';
/* eslint-disable */

manager.executor('a.b.c', async function({d,f}){
  
  return new Promise((r)=>{
    setTimeout(()=>{
      r(['111','222','333'])
    },1000);
  })
  
  return Agent.ajax(`${localBaseUrl}/api/v1/abc`, {d,f});
})