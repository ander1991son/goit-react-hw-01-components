import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Footer } from './Footer/Footer';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div>
      <div>
        <h1>"Profile"</h1>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <h1>"Statistics"</h1>
        <Statistics title="Upload stats" stats={data} />
        <h1>"FriendList"</h1>
        <FriendList friends={friends} />
        <h1>"TransactionHistory"</h1>
        <TransactionHistory items={transactions} />
        <Footer />
      </div>
    </div>
  );
};
