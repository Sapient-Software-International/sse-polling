// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import SSEComponent from './components/sse-component/sse-component';

export function App() {
  return (
    <div className={styles['container']}>
      <SSEComponent />
    </div>
  );
}

export default App;
