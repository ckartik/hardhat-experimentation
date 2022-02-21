const { ethers } = require("hardhat");

async function main() {
    const [deployer] = ethers.getSigners();

    console.log("Contract being deployed from address %s", deployer.address);
    console.log("Balance of deployer %s", (await deployer.getBalance()).toString());

    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();

    console.log("Contract deployed to address: %s", token.address);
}