import { useAuth } from '../../hooks/useAuth';

import './styles.scss';

export function UserInfo(): JSX.Element {
  const { user } = useAuth();

  return (
    <div className="user-info">
      <strong>{user?.name}</strong>
      <img src={user?.avatar} alt="" />
    </div>
  );
}
