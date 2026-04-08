import type { APIRoute } from 'astro';

// 1. Define the shape of the data Proxmox returns
interface ProxmoxNode {
  node: string;
  status: string;
  cpu: number;
  maxmem: number;
  mem: number;
  uptime: number;
  level?: string;
}

export const GET: APIRoute = async () => {
  const token = import.meta.env.PVE_TOKEN;
  const url = import.meta.env.PVE_URL;

  try {
    const response = await fetch(`${url}/nodes`, {
      headers: { 'Authorization': `PVEAPIToken=${token}` }
    });
    
    // 2. Cast the response to our Interface
    const json = await response.json();
    const data: ProxmoxNode[] = json.data;

    // 3. The 'node' parameter is now strictly typed
    const status = data.map((node: ProxmoxNode) => ({
      name: node.node,
      online: node.status === 'online',
      cpu: (node.cpu * 100).toFixed(1),
      ram: ((node.mem / node.maxmem) * 100).toFixed(1),
      uptime: Math.floor(node.uptime / 3600)
    }));

    return new Response(JSON.stringify(status), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Host Unreachable' }), { status: 500 });
  }
};