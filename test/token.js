const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {

    let Token;
    let hardhatToken;
    let owner;
    let addr1;
    let addr2;
    let addrs;

    beforeEach(async function () {
        Token = await ethers.getContractFactory("Token");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        hardhatToken = await Token.deploy();
    });

    describe("Deployment", function() {
        it("Should get the right owner", async function() {
            expect(await hardhatToken.owner()).to.equal(owner.address)
        });
        it("Should assign the total supply of tokens to the owner", async function () {
            expect(await hardhatToken.balanceOf(owner.address)).to.equal(await hardhatToken.totalSupply())
        });
    });
//     it("Deployment should assign the total supply of tokens to the owner", async function () {
//       const [owner, addr1, addr2] = await ethers.getSigners();

//       const Token = await ethers.getContractFactory("Token");
  
//       const hardhatToken = await Token.deploy();
//       const ownerBalance = await hardhatToken.balanceOf(owner.address);
//       expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
//       await hardhatToken.transfer(addr1.address, 50);
//       expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);
//       await hardhatToken.transfer(addr2.address, 40)
//       expect(await hardhatToken.balanceOf(addr2.address)).to.equal(40);
//     });
  });
