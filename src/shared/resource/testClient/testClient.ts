import { injectable } from 'inversify-props';
import { TestClient } from './interface/TestClient';

@injectable()
class TestClientImpl implements TestClient {
  private _app = false;

  public app() {
    return this._app;
  }

  public setApp() {
    console.log('im here');
    this._app = true;
  }

  public changeApp() {
    console.log(' im here', this._app);
    this._app = !this._app;
    console.log('i', this._app);
  }
}

export const createClient = () => new TestClientImpl();
