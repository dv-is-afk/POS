const http=require('http'),fs=require('fs');
http.createServer((q,r)=>{
  if(q.url==='/api/data'){
    if(q.method==='PUT'){let b='';q.on('data',c=>b+=c).on('end',()=>{fs.writeFileSync('data.json',b);r.end('ok')});return}
    r.setHeader('Content-Type','application/json');
    return r.end(fs.existsSync('data.json')?fs.readFileSync('data.json'):'{}');
  }
  r.setHeader('Content-Type','text/html');r.end(fs.readFileSync('index.html'));
}).listen(3000);