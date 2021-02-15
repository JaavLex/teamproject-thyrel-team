import { Avatar } from 'rsuite';
import BigButton from '../components/BigButton';
import AppLayout from '../components/lobby/AppLayout';
import AppTitle from '../components/lobby/AppTitle';
import UserCard from '../components/lobby/UserCard';
import UserCardList from '../components/lobby/UserCardList';
import StepTimer from '../components/StepTimer';
import Box from '../styles/Box';

export default function ComponentTest() {
  return (
    <AppLayout>
      <Box flexDirection="column" alignItems="center" width="100%" gap={10}>
        <AppTitle />

        <Box display="block" width={100} height={100}>
          <StepTimer
            finishAt={new Date('2021-02-10T15:15:00')}
            timeDuration={1000}
            onFinish={() => console.log('finished')}
          />
        </Box>

        <UserCard
          id={1}
          name="John Doe"
          avatar="https://cutt.ly/skYcTql"
          isOwner={true}
          isKickable={false}
          onKick={id => console.log('User id is :', id)}
        />

        <BigButton icon="star">Test</BigButton>

        <UserCardList
          players={[
            {
              id: 1,
              username: 'jeanmich',
              avatarUrl: 'jeanmich.com',
              isOwner: true,
              isPlaying: true,
              createdAt: '',
              roomId: 1,
            },
            {
              id: 2,
              username: 'Xx_plao',
              avatarUrl: 'jeanmich.com',
              isOwner: false,
              isPlaying: true,
              createdAt: '',
              roomId: 1,
            },
            {
              id: 3,
              username: 'AAAAAAHHHH',
              avatarUrl: 'oui.com',
              isOwner: false,
              isPlaying: true,
              createdAt: '',
              roomId: 1,
            },
            {
              id: 4,
              username: 'Melvyn',
              avatarUrl: 'nopn.com',
              isOwner: false,
              isPlaying: true,
              createdAt: '',
              roomId: 1,
            },
            {
              id: 5,
              username: 'Ana',
              avatarUrl: 'nopn.com',
              isOwner: false,
              isPlaying: true,
              createdAt: '',
              roomId: 1,
            },
            {
              id: 6,
              username: 'Alex',
              avatarUrl: 'nopn.com',
              isOwner: false,
              isPlaying: true,
              createdAt: '',
              roomId: 1,
            },
            {
              id: 7,
              username: 'Luca',
              avatarUrl: 'nopn.com',
              isOwner: false,
              isPlaying: true,
              createdAt: '',
              roomId: 1,
            },
          ]}
        />
      </Box>
    </AppLayout>
  );
}
