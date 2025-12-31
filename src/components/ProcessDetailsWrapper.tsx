import { useNavigate } from 'react-router-dom';
import { ProcessDetails } from './ProcessDetails';

export function ProcessDetailsWrapper() {
  const navigate = useNavigate();

  return <ProcessDetails onBack={() => navigate('/')} />;
}
