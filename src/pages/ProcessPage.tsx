import { useNavigate } from 'react-router-dom';
import { ProcessDetails } from '../components/ProcessDetails';

export function ProcessPage() {
  const navigate = useNavigate();

  return <ProcessDetails onBack={() => navigate('/')} />;
}
