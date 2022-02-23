import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { NewVesting } from '../target/types/new_vesting';

describe('new_vesting', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.NewVesting as Program<NewVesting>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
