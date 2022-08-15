import abi from "../constants/Vault.json";
import stableCoinAbi from "../constants/StableCoinToken.json";

const VAULT_CCONTRACT_ADDRESS = " 0xe2deaaf4fcfe1cd614965c0d59e70ec1e1f8621a";
const STABLE_COIN_ADDRESS = "0xed4e1d6a03559fad967ee64d20fd52682b3ac7ac";
const ORACLE="0xa67a539c4c125f541c6c75e32a4b8e72efd7e9d9"
const VAULT_ABI = abi.abi;
const STABLE_COIN_ABI = stableCoinAbi.abi;

export {
  VAULT_CCONTRACT_ADDRESS,
  VAULT_ABI,
  STABLE_COIN_ABI,
  STABLE_COIN_ADDRESS,
};
