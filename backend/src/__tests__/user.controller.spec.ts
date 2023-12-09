import { UserController } from '../controllers/user.controller';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../models/user.model';

describe('UserController', () => {
  let userController: UserController;
  let userRepositoryStub: jest.Mocked<UserRepository>;

  beforeEach(() => {
    userRepositoryStub = {
      find: jest.fn(),
      // 他のメソッドも同様にモック化します
    } as any;
    userController = new UserController(userRepositoryStub);
  });

  it('TODO: テストケースの説明', async () => {
    // TODO: テストの実装
  });

  it('find method returns an array of users', async () => {
    const testData: User[] = [{ id: '1', name: 'Test User' } as User];
    userRepositoryStub.find.mockResolvedValue(testData);

    const result = await userController.find();

    expect(result).toEqual(testData);
    expect(userRepositoryStub.find).toHaveBeenCalled();
  });
});