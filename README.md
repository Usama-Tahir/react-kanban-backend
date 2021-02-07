# Kanban-Backend

How to deploy this app?

After creating virtual machine with ubuntu 16.04 or ubuntu 18.04, you need to install following things:
<p>1. Node: v10.21.0 or above</p>
<p>2. npm</p>
<p>3. pm2 (npm package global install)</p>
<p>4. nestjs cli (npm package global install)</p>
<p>5. git</p>
<p>5. mongodb: v4.2 or above</p>
<p>6. nginx</p>


<h2>Steps:</h2>
<p>1. Clone the repo into folder</p>
<p>2. Put .env into project folder after cloning</p>
<p>3. Make build using npm run build</p>
<p>4. After making build, add the process into pm2 processes using the command given below</p>
    <ul>
    <li>pm2 start npm --name "Kanban-Backend" -- run start:prod</li>
    </ul>
<p>5. Configure nginx for reverse proxy for the port on which project will be running (defined in .env).</p>
