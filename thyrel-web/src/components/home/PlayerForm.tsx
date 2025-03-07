import React from 'react';
import { useHistory } from 'react-router-dom';
import { Notification } from 'rsuite';
import { client } from '../../api/client';
import { setToken } from '../../api/player-provider';
import profilesPictures from '../../images/profiles/profiles-pictures';
import Box from '../../styles/Box';
import Player from '../../types/Player.type';
import BigButton from '../BigButton';
import BigInput from '../lobby/BigInput';
import PlayerAvatar from './PlayerAvatar';

export default function PlayerForm({ identifier }: { identifier?: string }) {
  const [username, setUsername] = React.useState('');
  const [ppIndex, setPpIndex] = React.useState(0);
  const history = useHistory();
  const nextPp = () => {
    setPpIndex((p: number) => (p > profilesPictures.length - 2 ? 0 : p + 1));
  };

  function onStart() {
    client<Player>('room', {
      data: { username, avatarUrl: String(ppIndex) },
    }).then((player: Player) => {
      if (player.token?.tokenKey) {
        Notification['success']({
          title: 'Room successfully created.',
          description: 'Invite your friends.',
        });
        setToken(player.token.tokenKey);
        // to redirect to an other page
        history?.push('/r/lobby');
      }
    });
  }

  function onJoin() {
    client<Player>(`room/join/${identifier}`, {
      data: { username, avatarUrl: String(ppIndex) },
      method: 'PATCH',
    }).then((player: Player) => {
      if (player.token?.tokenKey) {
        Notification['success']({
          title: 'Room successfully created.',
          description: 'Invite your friends.',
        });
        setToken(player.token.tokenKey);
        // to redirect to an other page
        history?.push('/r/lobby');
      }
    });
  }

  return (
    <Box flexDirection="column" alignItems="center" width="100%" gap={24}>
      <PlayerAvatar image={profilesPictures[ppIndex]} onShuffle={nextPp} />

      <BigInput
        icon={'edit'}
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="pseudo de bg"
      />

      <Box flexDirection="column" alignItems="center" width="100%" gap={12}>
        <BigButton icon="angle-double-up" size="lg" onClick={onJoin}>
          Join
        </BigButton>

        {!identifier && (
          <BigButton icon="angle-double-right" size="lg" onClick={onStart}>
            Start
          </BigButton>
        )}
      </Box>
    </Box>
  );
}
