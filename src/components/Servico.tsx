import { useEffect, useState } from 'react';
import axios from 'axios';

const checkStatus = async (link: string) => {
  const response = await axios.get(link);
  return response.status;
};

function Servico({ nome, link }: { nome: string; link: string }) {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    checkStatus(link).then(res => {
      if (res === 200) setStatus(true);
      else setStatus(false);
    });
  }, [link]);

  return (
    <a href={link} target="_blank">
      <div className="px-3 py-2 border-2 min-w-56 border-black rounded-sm mb-2">
        <div className="flex justify-between items-center">
          <p className="font-semibold">{nome}</p>

          {status !== null && (
            <p className={status ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>
              {status ? 'Online' : 'Offline'}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}

export default Servico;

