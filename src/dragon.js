import web3 from './web3';

const address = '0x3b4A9474C605B4cDaC31ca3e9bcc7a588A027D7C';

const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "dragonIndex1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "dragonIndex2",
				"type": "uint256"
			}
		],
		"name": "breed",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "dragonIndex",
				"type": "uint256"
			}
		],
		"name": "buyDragon",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_air",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_water",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_earth",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_fire",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_light",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_dark",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_typeOfDragon",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "createDragon",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "dragonIndex",
				"type": "uint256"
			}
		],
		"name": "train",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_Dragon",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "air",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "water",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "earth",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fire",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "light",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "dark",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "typeOfDragon",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "index",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			}
		],
		"name": "MyDragonIndexes",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "MyDragons",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]



export default new web3.eth.Contract(abi, address);
