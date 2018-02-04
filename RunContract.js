var provider = new Web3.providers.HttpProvider("http://localhost:8545");
var contract = require("truffle-contract");

var MyContract = contract({
        "contractName": "Purchase",
        "abi": [
          {
            "constant": true,
            "inputs": [],
            "name": "seller",
            "outputs": [
              {
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "value",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "buyer",
            "outputs": [
              {
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "state",
            "outputs": [
              {
                "name": "",
                "type": "uint8"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [],
            "name": "Aborted",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [],
            "name": "PurchaseConfirmed",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [],
            "name": "ItemReceived",
            "type": "event"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "abort",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "confirmPurchase",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "confirmReceived",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
        "bytecode": "0x606060405233600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060023481151561005157fe5b046000819055503460005460020214151561006b57600080fd5b6106518061007a6000396000f300606060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806308551a531461008857806335a063b4146100dd5780633fa4f245146100f25780637150d8ae1461011b57806373fac6f014610170578063c19d93fb14610185578063d6960697146101bc575b600080fd5b341561009357600080fd5b61009b6101c6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100e857600080fd5b6100f06101ec565b005b34156100fd57600080fd5b610105610348565b6040518082815260200191505060405180910390f35b341561012657600080fd5b61012e61034e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561017b57600080fd5b610183610374565b005b341561019057600080fd5b610198610534565b604051808260028111156101a857fe5b60ff16815260200191505060405180910390f35b6101c4610547565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561024857600080fd5b600080600281111561025657fe5b600260149054906101000a900460ff16600281111561027157fe5b14151561027d57600080fd5b7f72c874aeff0b183a56e2b79c71b46e1aed4dee5e09862134b8821ba2fddbf8bf60405160405180910390a160028060146101000a81548160ff021916908360028111156102c757fe5b0217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050151561034557600080fd5b50565b60005481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103d057600080fd5b60018060028111156103de57fe5b600260149054906101000a900460ff1660028111156103f957fe5b14151561040557600080fd5b7fe89152acd703c9d8c7d28829d443260b411454d45394e7995815140c8cbcbcf760405160405180910390a160028060146101000a81548160ff0219169083600281111561044f57fe5b0217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6000549081150290604051600060405180830381858888f1935050505015156104b857600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050151561053157600080fd5b50565b600260149054906101000a900460ff1681565b600080600281111561055557fe5b600260149054906101000a900460ff16600281111561057057fe5b14151561057c57600080fd5b600054600202341480151561059057600080fd5b7fd5d55c8a68912e9a110618df8d5e2e83b8d83211c57a8ddd1203df92885dc88160405160405180910390a133600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600260146101000a81548160ff0219169083600281111561061c57fe5b021790555050505600a165627a7a72305820e239d6c0b53fcb05afe40a56169e605a53397b3a212c2a3cf5ed5b7e1868b5cd0029",
        "deployedBytecode": "0x606060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806308551a531461008857806335a063b4146100dd5780633fa4f245146100f25780637150d8ae1461011b57806373fac6f014610170578063c19d93fb14610185578063d6960697146101bc575b600080fd5b341561009357600080fd5b61009b6101c6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100e857600080fd5b6100f06101ec565b005b34156100fd57600080fd5b610105610348565b6040518082815260200191505060405180910390f35b341561012657600080fd5b61012e61034e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561017b57600080fd5b610183610374565b005b341561019057600080fd5b610198610534565b604051808260028111156101a857fe5b60ff16815260200191505060405180910390f35b6101c4610547565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561024857600080fd5b600080600281111561025657fe5b600260149054906101000a900460ff16600281111561027157fe5b14151561027d57600080fd5b7f72c874aeff0b183a56e2b79c71b46e1aed4dee5e09862134b8821ba2fddbf8bf60405160405180910390a160028060146101000a81548160ff021916908360028111156102c757fe5b0217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050151561034557600080fd5b50565b60005481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103d057600080fd5b60018060028111156103de57fe5b600260149054906101000a900460ff1660028111156103f957fe5b14151561040557600080fd5b7fe89152acd703c9d8c7d28829d443260b411454d45394e7995815140c8cbcbcf760405160405180910390a160028060146101000a81548160ff0219169083600281111561044f57fe5b0217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6000549081150290604051600060405180830381858888f1935050505015156104b857600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050151561053157600080fd5b50565b600260149054906101000a900460ff1681565b600080600281111561055557fe5b600260149054906101000a900460ff16600281111561057057fe5b14151561057c57600080fd5b600054600202341480151561059057600080fd5b7fd5d55c8a68912e9a110618df8d5e2e83b8d83211c57a8ddd1203df92885dc88160405160405180910390a133600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600260146101000a81548160ff0219169083600281111561061c57fe5b021790555050505600a165627a7a72305820e239d6c0b53fcb05afe40a56169e605a53397b3a212c2a3cf5ed5b7e1868b5cd0029",
        "sourceMap": "28:2349:0:-;;;429:10;420:6;;:19;;;;;;;;;;;;;;;;;;470:1;458:9;:13;;;;;;;;450:5;:21;;;;505:9;495:5;;491:1;:9;490:24;482:33;;;;;;;;28:2349;;;;;;",
        "deployedSourceMap": "28:2349:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;77:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1113:191;;;;;;;;;;;;;;53:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;105:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1833:541;;;;;;;;;;;;;;178:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1483:240;;;;;;77:21;;;;;;;;;;;;;:::o;1113:191::-;768:6;;;;;;;;;;;754:20;;:10;:20;;;746:29;;;;;;;;1183:13;862:6;853:15;;;;;;;;:5;;;;;;;;;;;:15;;;;;;;;;845:24;;;;;;;;1214:9;;;;;;;;;;1242:14;1234:5;;:22;;;;;;;;;;;;;;;;;;;;;;;;1267:6;;;;;;;;;;;:15;;:29;1283:4;:12;;;1267:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;786:1;1113:191::o;53:17::-;;;;:::o;105:20::-;;;;;;;;;;;;;:::o;1833:541::-;679:5;;;;;;;;;;;665:19;;:10;:19;;;657:28;;;;;;;;1912:12;862:6;853:15;;;;;;;;:5;;;;;;;;;;;:15;;;;;;;;;845:24;;;;;;;;1942:14;;;;;;;;;;2136;2128:5;;:22;;;;;;;;;;;;;;;;;;;;;;;;2305:5;;;;;;;;;;;:14;;:21;2320:5;;2305:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2337:6;;;;;;;;;;;:15;;:29;2353:4;:12;;;2337:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;696:1;1833:541::o;178:18::-;;;;;;;;;;;;;:::o;1483:240::-;1543:13;862:6;853:15;;;;;;;;:5;;;;;;;;;;;:15;;;;;;;;;845:24;;;;;;;;1595:5;;1591:1;:9;1577;:24;586:10;578:19;;;;;;;;1636;;;;;;;;;;1674:10;1666:5;;:18;;;;;;;;;;;;;;;;;;1703:12;1695:5;;:20;;;;;;;;;;;;;;;;;;;;;;;;880:1;1483:240;:::o",
        "source": "pragma solidity ^0.4.11;\r\n\r\ncontract Purchase {\r\n    uint public value;\r\n    address public seller;\r\n    address public buyer;\r\n    enum State { Created, Locked, Inactive }\r\n    State public state;\r\n\r\n    // Ensure that `msg.value` is an even number.\r\n    // Division will truncate if it is an odd number.\r\n    // Check via multiplication that it wasn't an odd number.\r\n    function Purchase() public payable {\r\n        seller = msg.sender;\r\n        value = msg.value / 2;\r\n        require((2 * value) == msg.value);\r\n    }\r\n\r\n    modifier condition(bool _condition) {\r\n        require(_condition);\r\n        _;\r\n    }\r\n\r\n    modifier onlyBuyer() {\r\n        require(msg.sender == buyer);\r\n        _;\r\n    }\r\n\r\n    modifier onlySeller() {\r\n        require(msg.sender == seller);\r\n        _;\r\n    }\r\n\r\n    modifier inState(State _state) {\r\n        require(state == _state);\r\n        _;\r\n    }\r\n\r\n    event Aborted();\r\n    event PurchaseConfirmed();\r\n    event ItemReceived();\r\n\r\n    /// Abort the purchase and reclaim the ether.\r\n    /// Can only be called by the seller before\r\n    /// the contract is locked.\r\n    function abort()\r\n        public\r\n        onlySeller\r\n        inState(State.Created)\r\n    {\r\n        Aborted();\r\n        state = State.Inactive;\r\n        seller.transfer(this.balance);\r\n    }\r\n\r\n    /// Confirm the purchase as buyer.\r\n    /// Transaction has to include `2 * value` ether.\r\n    /// The ether will be locked until confirmReceived\r\n    /// is called.\r\n    function confirmPurchase()\r\n        public\r\n        inState(State.Created)\r\n        condition(msg.value == (2 * value))\r\n        payable\r\n    {\r\n        PurchaseConfirmed();\r\n        buyer = msg.sender;\r\n        state = State.Locked;\r\n    }\r\n\r\n    /// Confirm that you (the buyer) received the item.\r\n    /// This will release the locked ether.\r\n    function confirmReceived()\r\n        public\r\n        onlyBuyer\r\n        inState(State.Locked)\r\n    {\r\n        ItemReceived();\r\n        // It is important to change the state first because\r\n        // otherwise, the contracts called using `send` below\r\n        // can call in again here.\r\n        state = State.Inactive;\r\n\r\n        // NOTE: This actually allows both the buyer and the seller to\r\n        // block the refund - the withdraw pattern should be used.\r\n\r\n        buyer.transfer(value);\r\n        seller.transfer(this.balance);\r\n    }\r\n}",
        "sourcePath": "C:\\Users\\kevin\\OneDrive\\Documents\\GitHub\\HealthChainz1\\HealthChainz\\contracts\\Purchase.sol",
        "ast": {
          "attributes": {
            "absolutePath": "/C/Users/kevin/OneDrive/Documents/GitHub/HealthChainz1/HealthChainz/contracts/Purchase.sol",
            "exportedSymbols": {
              "Purchase": [
                176
              ]
            }
          },
          "children": [
            {
              "attributes": {
                "literals": [
                  "solidity",
                  "^",
                  "0.4",
                  ".11"
                ]
              },
              "id": 1,
              "name": "PragmaDirective",
              "src": "0:24:0"
            },
            {
              "attributes": {
                "baseContracts": [
                  null
                ],
                "contractDependencies": [
                  null
                ],
                "contractKind": "contract",
                "documentation": null,
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                  176
                ],
                "name": "Purchase",
                "scope": 177
              },
              "children": [
                {
                  "attributes": {
                    "constant": false,
                    "name": "value",
                    "scope": 176,
                    "stateVariable": true,
                    "storageLocation": "default",
                    "type": "uint256",
                    "value": null,
                    "visibility": "public"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint",
                        "type": "uint256"
                      },
                      "id": 2,
                      "name": "ElementaryTypeName",
                      "src": "53:4:0"
                    }
                  ],
                  "id": 3,
                  "name": "VariableDeclaration",
                  "src": "53:17:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "seller",
                    "scope": 176,
                    "stateVariable": true,
                    "storageLocation": "default",
                    "type": "address",
                    "value": null,
                    "visibility": "public"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "type": "address"
                      },
                      "id": 4,
                      "name": "ElementaryTypeName",
                      "src": "77:7:0"
                    }
                  ],
                  "id": 5,
                  "name": "VariableDeclaration",
                  "src": "77:21:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "buyer",
                    "scope": 176,
                    "stateVariable": true,
                    "storageLocation": "default",
                    "type": "address",
                    "value": null,
                    "visibility": "public"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "type": "address"
                      },
                      "id": 6,
                      "name": "ElementaryTypeName",
                      "src": "105:7:0"
                    }
                  ],
                  "id": 7,
                  "name": "VariableDeclaration",
                  "src": "105:20:0"
                },
                {
                  "attributes": {
                    "canonicalName": "Purchase.State",
                    "name": "State"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "Created"
                      },
                      "id": 8,
                      "name": "EnumValue",
                      "src": "145:7:0"
                    },
                    {
                      "attributes": {
                        "name": "Locked"
                      },
                      "id": 9,
                      "name": "EnumValue",
                      "src": "154:6:0"
                    },
                    {
                      "attributes": {
                        "name": "Inactive"
                      },
                      "id": 10,
                      "name": "EnumValue",
                      "src": "162:8:0"
                    }
                  ],
                  "id": 11,
                  "name": "EnumDefinition",
                  "src": "132:40:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "state",
                    "scope": 176,
                    "stateVariable": true,
                    "storageLocation": "default",
                    "type": "enum Purchase.State",
                    "value": null,
                    "visibility": "public"
                  },
                  "children": [
                    {
                      "attributes": {
                        "contractScope": null,
                        "name": "State",
                        "referencedDeclaration": 11,
                        "type": "enum Purchase.State"
                      },
                      "id": 12,
                      "name": "UserDefinedTypeName",
                      "src": "178:5:0"
                    }
                  ],
                  "id": 13,
                  "name": "VariableDeclaration",
                  "src": "178:18:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "implemented": true,
                    "isConstructor": true,
                    "modifiers": [
                      null
                    ],
                    "name": "Purchase",
                    "payable": true,
                    "scope": 176,
                    "stateMutability": "payable",
                    "superFunction": null,
                    "visibility": "public"
                  },
                  "children": [
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 14,
                      "name": "ParameterList",
                      "src": "391:2:0"
                    },
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 15,
                      "name": "ParameterList",
                      "src": "409:0:0"
                    },
                    {
                      "children": [
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "=",
                                "type": "address"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 5,
                                    "type": "address",
                                    "value": "seller"
                                  },
                                  "id": 16,
                                  "name": "Identifier",
                                  "src": "420:6:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender",
                                    "referencedDeclaration": null,
                                    "type": "address"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 188,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 17,
                                      "name": "Identifier",
                                      "src": "429:3:0"
                                    }
                                  ],
                                  "id": 18,
                                  "name": "MemberAccess",
                                  "src": "429:10:0"
                                }
                              ],
                              "id": 19,
                              "name": "Assignment",
                              "src": "420:19:0"
                            }
                          ],
                          "id": 20,
                          "name": "ExpressionStatement",
                          "src": "420:19:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "=",
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3,
                                    "type": "uint256",
                                    "value": "value"
                                  },
                                  "id": 21,
                                  "name": "Identifier",
                                  "src": "450:5:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "/",
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "value",
                                        "referencedDeclaration": null,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 188,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 22,
                                          "name": "Identifier",
                                          "src": "458:3:0"
                                        }
                                      ],
                                      "id": 23,
                                      "name": "MemberAccess",
                                      "src": "458:9:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "hexvalue": "32",
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "subdenomination": null,
                                        "token": "number",
                                        "type": "int_const 2",
                                        "value": "2"
                                      },
                                      "id": 24,
                                      "name": "Literal",
                                      "src": "470:1:0"
                                    }
                                  ],
                                  "id": 25,
                                  "name": "BinaryOperation",
                                  "src": "458:13:0"
                                }
                              ],
                              "id": 26,
                              "name": "Assignment",
                              "src": "450:21:0"
                            }
                          ],
                          "id": 27,
                          "name": "ExpressionStatement",
                          "src": "450:21:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 191,
                                    "type": "function (bool) pure",
                                    "value": "require"
                                  },
                                  "id": 28,
                                  "name": "Identifier",
                                  "src": "482:7:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "==",
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "commonType": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            },
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "operator": "*",
                                            "type": "uint256"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "hexvalue": "32",
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "subdenomination": null,
                                                "token": "number",
                                                "type": "int_const 2",
                                                "value": "2"
                                              },
                                              "id": 29,
                                              "name": "Literal",
                                              "src": "491:1:0"
                                            },
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": 3,
                                                "type": "uint256",
                                                "value": "value"
                                              },
                                              "id": 30,
                                              "name": "Identifier",
                                              "src": "495:5:0"
                                            }
                                          ],
                                          "id": 31,
                                          "name": "BinaryOperation",
                                          "src": "491:9:0"
                                        }
                                      ],
                                      "id": 32,
                                      "name": "TupleExpression",
                                      "src": "490:11:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "value",
                                        "referencedDeclaration": null,
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 188,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 33,
                                          "name": "Identifier",
                                          "src": "505:3:0"
                                        }
                                      ],
                                      "id": 34,
                                      "name": "MemberAccess",
                                      "src": "505:9:0"
                                    }
                                  ],
                                  "id": 35,
                                  "name": "BinaryOperation",
                                  "src": "490:24:0"
                                }
                              ],
                              "id": 36,
                              "name": "FunctionCall",
                              "src": "482:33:0"
                            }
                          ],
                          "id": 37,
                          "name": "ExpressionStatement",
                          "src": "482:33:0"
                        }
                      ],
                      "id": 38,
                      "name": "Block",
                      "src": "409:114:0"
                    }
                  ],
                  "id": 39,
                  "name": "FunctionDefinition",
                  "src": "374:149:0"
                },
                {
                  "attributes": {
                    "name": "condition",
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "_condition",
                            "scope": 49,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "bool",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bool",
                                "type": "bool"
                              },
                              "id": 40,
                              "name": "ElementaryTypeName",
                              "src": "550:4:0"
                            }
                          ],
                          "id": 41,
                          "name": "VariableDeclaration",
                          "src": "550:15:0"
                        }
                      ],
                      "id": 42,
                      "name": "ParameterList",
                      "src": "549:17:0"
                    },
                    {
                      "children": [
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 191,
                                    "type": "function (bool) pure",
                                    "value": "require"
                                  },
                                  "id": 43,
                                  "name": "Identifier",
                                  "src": "578:7:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 41,
                                    "type": "bool",
                                    "value": "_condition"
                                  },
                                  "id": 44,
                                  "name": "Identifier",
                                  "src": "586:10:0"
                                }
                              ],
                              "id": 45,
                              "name": "FunctionCall",
                              "src": "578:19:0"
                            }
                          ],
                          "id": 46,
                          "name": "ExpressionStatement",
                          "src": "578:19:0"
                        },
                        {
                          "id": 47,
                          "name": "PlaceholderStatement",
                          "src": "608:1:0"
                        }
                      ],
                      "id": 48,
                      "name": "Block",
                      "src": "567:50:0"
                    }
                  ],
                  "id": 49,
                  "name": "ModifierDefinition",
                  "src": "531:86:0"
                },
                {
                  "attributes": {
                    "name": "onlyBuyer",
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 50,
                      "name": "ParameterList",
                      "src": "643:2:0"
                    },
                    {
                      "children": [
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 191,
                                    "type": "function (bool) pure",
                                    "value": "require"
                                  },
                                  "id": 51,
                                  "name": "Identifier",
                                  "src": "657:7:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "==",
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "sender",
                                        "referencedDeclaration": null,
                                        "type": "address"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 188,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 52,
                                          "name": "Identifier",
                                          "src": "665:3:0"
                                        }
                                      ],
                                      "id": 53,
                                      "name": "MemberAccess",
                                      "src": "665:10:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 7,
                                        "type": "address",
                                        "value": "buyer"
                                      },
                                      "id": 54,
                                      "name": "Identifier",
                                      "src": "679:5:0"
                                    }
                                  ],
                                  "id": 55,
                                  "name": "BinaryOperation",
                                  "src": "665:19:0"
                                }
                              ],
                              "id": 56,
                              "name": "FunctionCall",
                              "src": "657:28:0"
                            }
                          ],
                          "id": 57,
                          "name": "ExpressionStatement",
                          "src": "657:28:0"
                        },
                        {
                          "id": 58,
                          "name": "PlaceholderStatement",
                          "src": "696:1:0"
                        }
                      ],
                      "id": 59,
                      "name": "Block",
                      "src": "646:59:0"
                    }
                  ],
                  "id": 60,
                  "name": "ModifierDefinition",
                  "src": "625:80:0"
                },
                {
                  "attributes": {
                    "name": "onlySeller",
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 61,
                      "name": "ParameterList",
                      "src": "732:2:0"
                    },
                    {
                      "children": [
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 191,
                                    "type": "function (bool) pure",
                                    "value": "require"
                                  },
                                  "id": 62,
                                  "name": "Identifier",
                                  "src": "746:7:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "==",
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "sender",
                                        "referencedDeclaration": null,
                                        "type": "address"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 188,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 63,
                                          "name": "Identifier",
                                          "src": "754:3:0"
                                        }
                                      ],
                                      "id": 64,
                                      "name": "MemberAccess",
                                      "src": "754:10:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 5,
                                        "type": "address",
                                        "value": "seller"
                                      },
                                      "id": 65,
                                      "name": "Identifier",
                                      "src": "768:6:0"
                                    }
                                  ],
                                  "id": 66,
                                  "name": "BinaryOperation",
                                  "src": "754:20:0"
                                }
                              ],
                              "id": 67,
                              "name": "FunctionCall",
                              "src": "746:29:0"
                            }
                          ],
                          "id": 68,
                          "name": "ExpressionStatement",
                          "src": "746:29:0"
                        },
                        {
                          "id": 69,
                          "name": "PlaceholderStatement",
                          "src": "786:1:0"
                        }
                      ],
                      "id": 70,
                      "name": "Block",
                      "src": "735:60:0"
                    }
                  ],
                  "id": 71,
                  "name": "ModifierDefinition",
                  "src": "713:82:0"
                },
                {
                  "attributes": {
                    "name": "inState",
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "_state",
                            "scope": 83,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "enum Purchase.State",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "contractScope": null,
                                "name": "State",
                                "referencedDeclaration": 11,
                                "type": "enum Purchase.State"
                              },
                              "id": 72,
                              "name": "UserDefinedTypeName",
                              "src": "820:5:0"
                            }
                          ],
                          "id": 73,
                          "name": "VariableDeclaration",
                          "src": "820:12:0"
                        }
                      ],
                      "id": 74,
                      "name": "ParameterList",
                      "src": "819:14:0"
                    },
                    {
                      "children": [
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 191,
                                    "type": "function (bool) pure",
                                    "value": "require"
                                  },
                                  "id": 75,
                                  "name": "Identifier",
                                  "src": "845:7:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_enum$_State_$11",
                                      "typeString": "enum Purchase.State"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "==",
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 13,
                                        "type": "enum Purchase.State",
                                        "value": "state"
                                      },
                                      "id": 76,
                                      "name": "Identifier",
                                      "src": "853:5:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 73,
                                        "type": "enum Purchase.State",
                                        "value": "_state"
                                      },
                                      "id": 77,
                                      "name": "Identifier",
                                      "src": "862:6:0"
                                    }
                                  ],
                                  "id": 78,
                                  "name": "BinaryOperation",
                                  "src": "853:15:0"
                                }
                              ],
                              "id": 79,
                              "name": "FunctionCall",
                              "src": "845:24:0"
                            }
                          ],
                          "id": 80,
                          "name": "ExpressionStatement",
                          "src": "845:24:0"
                        },
                        {
                          "id": 81,
                          "name": "PlaceholderStatement",
                          "src": "880:1:0"
                        }
                      ],
                      "id": 82,
                      "name": "Block",
                      "src": "834:55:0"
                    }
                  ],
                  "id": 83,
                  "name": "ModifierDefinition",
                  "src": "803:86:0"
                },
                {
                  "attributes": {
                    "anonymous": false,
                    "name": "Aborted"
                  },
                  "children": [
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 84,
                      "name": "ParameterList",
                      "src": "910:2:0"
                    }
                  ],
                  "id": 85,
                  "name": "EventDefinition",
                  "src": "897:16:0"
                },
                {
                  "attributes": {
                    "anonymous": false,
                    "name": "PurchaseConfirmed"
                  },
                  "children": [
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 86,
                      "name": "ParameterList",
                      "src": "942:2:0"
                    }
                  ],
                  "id": 87,
                  "name": "EventDefinition",
                  "src": "919:26:0"
                },
                {
                  "attributes": {
                    "anonymous": false,
                    "name": "ItemReceived"
                  },
                  "children": [
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 88,
                      "name": "ParameterList",
                      "src": "969:2:0"
                    }
                  ],
                  "id": 89,
                  "name": "EventDefinition",
                  "src": "951:21:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "implemented": true,
                    "isConstructor": false,
                    "name": "abort",
                    "payable": false,
                    "scope": 176,
                    "stateMutability": "nonpayable",
                    "superFunction": null,
                    "visibility": "public"
                  },
                  "children": [
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 90,
                      "name": "ParameterList",
                      "src": "1127:2:0"
                    },
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 97,
                      "name": "ParameterList",
                      "src": "1203:0:0"
                    },
                    {
                      "attributes": {
                        "arguments": [
                          null
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "overloadedDeclarations": [
                              null
                            ],
                            "referencedDeclaration": 71,
                            "type": "modifier ()",
                            "value": "onlySeller"
                          },
                          "id": 91,
                          "name": "Identifier",
                          "src": "1155:10:0"
                        }
                      ],
                      "id": 92,
                      "name": "ModifierInvocation",
                      "src": "1155:10:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "overloadedDeclarations": [
                              null
                            ],
                            "referencedDeclaration": 83,
                            "type": "modifier (enum Purchase.State)",
                            "value": "inState"
                          },
                          "id": 93,
                          "name": "Identifier",
                          "src": "1175:7:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "member_name": "Created",
                            "referencedDeclaration": null,
                            "type": "enum Purchase.State"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 11,
                                "type": "type(enum Purchase.State)",
                                "value": "State"
                              },
                              "id": 94,
                              "name": "Identifier",
                              "src": "1183:5:0"
                            }
                          ],
                          "id": 95,
                          "name": "MemberAccess",
                          "src": "1183:13:0"
                        }
                      ],
                      "id": 96,
                      "name": "ModifierInvocation",
                      "src": "1175:22:0"
                    },
                    {
                      "children": [
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "arguments": [
                                  null
                                ],
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      null
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 85,
                                    "type": "function ()",
                                    "value": "Aborted"
                                  },
                                  "id": 98,
                                  "name": "Identifier",
                                  "src": "1214:7:0"
                                }
                              ],
                              "id": 99,
                              "name": "FunctionCall",
                              "src": "1214:9:0"
                            }
                          ],
                          "id": 100,
                          "name": "ExpressionStatement",
                          "src": "1214:9:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "=",
                                "type": "enum Purchase.State"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 13,
                                    "type": "enum Purchase.State",
                                    "value": "state"
                                  },
                                  "id": 101,
                                  "name": "Identifier",
                                  "src": "1234:5:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "member_name": "Inactive",
                                    "referencedDeclaration": null,
                                    "type": "enum Purchase.State"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 11,
                                        "type": "type(enum Purchase.State)",
                                        "value": "State"
                                      },
                                      "id": 102,
                                      "name": "Identifier",
                                      "src": "1242:5:0"
                                    }
                                  ],
                                  "id": 103,
                                  "name": "MemberAccess",
                                  "src": "1242:14:0"
                                }
                              ],
                              "id": 104,
                              "name": "Assignment",
                              "src": "1234:22:0"
                            }
                          ],
                          "id": 105,
                          "name": "ExpressionStatement",
                          "src": "1234:22:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "transfer",
                                    "referencedDeclaration": null,
                                    "type": "function (uint256)"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 5,
                                        "type": "address",
                                        "value": "seller"
                                      },
                                      "id": 106,
                                      "name": "Identifier",
                                      "src": "1267:6:0"
                                    }
                                  ],
                                  "id": 108,
                                  "name": "MemberAccess",
                                  "src": "1267:15:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "balance",
                                    "referencedDeclaration": null,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 199,
                                        "type": "contract Purchase",
                                        "value": "this"
                                      },
                                      "id": 109,
                                      "name": "Identifier",
                                      "src": "1283:4:0"
                                    }
                                  ],
                                  "id": 110,
                                  "name": "MemberAccess",
                                  "src": "1283:12:0"
                                }
                              ],
                              "id": 111,
                              "name": "FunctionCall",
                              "src": "1267:29:0"
                            }
                          ],
                          "id": 112,
                          "name": "ExpressionStatement",
                          "src": "1267:29:0"
                        }
                      ],
                      "id": 113,
                      "name": "Block",
                      "src": "1203:101:0"
                    }
                  ],
                  "id": 114,
                  "name": "FunctionDefinition",
                  "src": "1113:191:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "implemented": true,
                    "isConstructor": false,
                    "name": "confirmPurchase",
                    "payable": true,
                    "scope": 176,
                    "stateMutability": "payable",
                    "superFunction": null,
                    "visibility": "public"
                  },
                  "children": [
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 115,
                      "name": "ParameterList",
                      "src": "1507:2:0"
                    },
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 129,
                      "name": "ParameterList",
                      "src": "1625:0:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "overloadedDeclarations": [
                              null
                            ],
                            "referencedDeclaration": 83,
                            "type": "modifier (enum Purchase.State)",
                            "value": "inState"
                          },
                          "id": 116,
                          "name": "Identifier",
                          "src": "1535:7:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "member_name": "Created",
                            "referencedDeclaration": null,
                            "type": "enum Purchase.State"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 11,
                                "type": "type(enum Purchase.State)",
                                "value": "State"
                              },
                              "id": 117,
                              "name": "Identifier",
                              "src": "1543:5:0"
                            }
                          ],
                          "id": 118,
                          "name": "MemberAccess",
                          "src": "1543:13:0"
                        }
                      ],
                      "id": 119,
                      "name": "ModifierInvocation",
                      "src": "1535:22:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "overloadedDeclarations": [
                              null
                            ],
                            "referencedDeclaration": 49,
                            "type": "modifier (bool)",
                            "value": "condition"
                          },
                          "id": 120,
                          "name": "Identifier",
                          "src": "1567:9:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "operator": "==",
                            "type": "bool"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "member_name": "value",
                                "referencedDeclaration": null,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 188,
                                    "type": "msg",
                                    "value": "msg"
                                  },
                                  "id": 121,
                                  "name": "Identifier",
                                  "src": "1577:3:0"
                                }
                              ],
                              "id": 122,
                              "name": "MemberAccess",
                              "src": "1577:9:0"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "*",
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "hexvalue": "32",
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "subdenomination": null,
                                        "token": "number",
                                        "type": "int_const 2",
                                        "value": "2"
                                      },
                                      "id": 123,
                                      "name": "Literal",
                                      "src": "1591:1:0"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3,
                                        "type": "uint256",
                                        "value": "value"
                                      },
                                      "id": 124,
                                      "name": "Identifier",
                                      "src": "1595:5:0"
                                    }
                                  ],
                                  "id": 125,
                                  "name": "BinaryOperation",
                                  "src": "1591:9:0"
                                }
                              ],
                              "id": 126,
                              "name": "TupleExpression",
                              "src": "1590:11:0"
                            }
                          ],
                          "id": 127,
                          "name": "BinaryOperation",
                          "src": "1577:24:0"
                        }
                      ],
                      "id": 128,
                      "name": "ModifierInvocation",
                      "src": "1567:35:0"
                    },
                    {
                      "children": [
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "arguments": [
                                  null
                                ],
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      null
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 87,
                                    "type": "function ()",
                                    "value": "PurchaseConfirmed"
                                  },
                                  "id": 130,
                                  "name": "Identifier",
                                  "src": "1636:17:0"
                                }
                              ],
                              "id": 131,
                              "name": "FunctionCall",
                              "src": "1636:19:0"
                            }
                          ],
                          "id": 132,
                          "name": "ExpressionStatement",
                          "src": "1636:19:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "=",
                                "type": "address"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 7,
                                    "type": "address",
                                    "value": "buyer"
                                  },
                                  "id": 133,
                                  "name": "Identifier",
                                  "src": "1666:5:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender",
                                    "referencedDeclaration": null,
                                    "type": "address"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 188,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 134,
                                      "name": "Identifier",
                                      "src": "1674:3:0"
                                    }
                                  ],
                                  "id": 135,
                                  "name": "MemberAccess",
                                  "src": "1674:10:0"
                                }
                              ],
                              "id": 136,
                              "name": "Assignment",
                              "src": "1666:18:0"
                            }
                          ],
                          "id": 137,
                          "name": "ExpressionStatement",
                          "src": "1666:18:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "=",
                                "type": "enum Purchase.State"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 13,
                                    "type": "enum Purchase.State",
                                    "value": "state"
                                  },
                                  "id": 138,
                                  "name": "Identifier",
                                  "src": "1695:5:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "member_name": "Locked",
                                    "referencedDeclaration": null,
                                    "type": "enum Purchase.State"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 11,
                                        "type": "type(enum Purchase.State)",
                                        "value": "State"
                                      },
                                      "id": 139,
                                      "name": "Identifier",
                                      "src": "1703:5:0"
                                    }
                                  ],
                                  "id": 140,
                                  "name": "MemberAccess",
                                  "src": "1703:12:0"
                                }
                              ],
                              "id": 141,
                              "name": "Assignment",
                              "src": "1695:20:0"
                            }
                          ],
                          "id": 142,
                          "name": "ExpressionStatement",
                          "src": "1695:20:0"
                        }
                      ],
                      "id": 143,
                      "name": "Block",
                      "src": "1625:98:0"
                    }
                  ],
                  "id": 144,
                  "name": "FunctionDefinition",
                  "src": "1483:240:0"
                },
                {
                  "attributes": {
                    "constant": false,
                    "implemented": true,
                    "isConstructor": false,
                    "name": "confirmReceived",
                    "payable": false,
                    "scope": 176,
                    "stateMutability": "nonpayable",
                    "superFunction": null,
                    "visibility": "public"
                  },
                  "children": [
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 145,
                      "name": "ParameterList",
                      "src": "1857:2:0"
                    },
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 152,
                      "name": "ParameterList",
                      "src": "1931:0:0"
                    },
                    {
                      "attributes": {
                        "arguments": [
                          null
                        ]
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "overloadedDeclarations": [
                              null
                            ],
                            "referencedDeclaration": 60,
                            "type": "modifier ()",
                            "value": "onlyBuyer"
                          },
                          "id": 146,
                          "name": "Identifier",
                          "src": "1885:9:0"
                        }
                      ],
                      "id": 147,
                      "name": "ModifierInvocation",
                      "src": "1885:9:0"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "overloadedDeclarations": [
                              null
                            ],
                            "referencedDeclaration": 83,
                            "type": "modifier (enum Purchase.State)",
                            "value": "inState"
                          },
                          "id": 148,
                          "name": "Identifier",
                          "src": "1904:7:0"
                        },
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "member_name": "Locked",
                            "referencedDeclaration": null,
                            "type": "enum Purchase.State"
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 11,
                                "type": "type(enum Purchase.State)",
                                "value": "State"
                              },
                              "id": 149,
                              "name": "Identifier",
                              "src": "1912:5:0"
                            }
                          ],
                          "id": 150,
                          "name": "MemberAccess",
                          "src": "1912:12:0"
                        }
                      ],
                      "id": 151,
                      "name": "ModifierInvocation",
                      "src": "1904:21:0"
                    },
                    {
                      "children": [
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "arguments": [
                                  null
                                ],
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      null
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 89,
                                    "type": "function ()",
                                    "value": "ItemReceived"
                                  },
                                  "id": 153,
                                  "name": "Identifier",
                                  "src": "1942:12:0"
                                }
                              ],
                              "id": 154,
                              "name": "FunctionCall",
                              "src": "1942:14:0"
                            }
                          ],
                          "id": 155,
                          "name": "ExpressionStatement",
                          "src": "1942:14:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "=",
                                "type": "enum Purchase.State"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 13,
                                    "type": "enum Purchase.State",
                                    "value": "state"
                                  },
                                  "id": 156,
                                  "name": "Identifier",
                                  "src": "2128:5:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "member_name": "Inactive",
                                    "referencedDeclaration": null,
                                    "type": "enum Purchase.State"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 11,
                                        "type": "type(enum Purchase.State)",
                                        "value": "State"
                                      },
                                      "id": 157,
                                      "name": "Identifier",
                                      "src": "2136:5:0"
                                    }
                                  ],
                                  "id": 158,
                                  "name": "MemberAccess",
                                  "src": "2136:14:0"
                                }
                              ],
                              "id": 159,
                              "name": "Assignment",
                              "src": "2128:22:0"
                            }
                          ],
                          "id": 160,
                          "name": "ExpressionStatement",
                          "src": "2128:22:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "transfer",
                                    "referencedDeclaration": null,
                                    "type": "function (uint256)"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 7,
                                        "type": "address",
                                        "value": "buyer"
                                      },
                                      "id": 161,
                                      "name": "Identifier",
                                      "src": "2305:5:0"
                                    }
                                  ],
                                  "id": 163,
                                  "name": "MemberAccess",
                                  "src": "2305:14:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3,
                                    "type": "uint256",
                                    "value": "value"
                                  },
                                  "id": 164,
                                  "name": "Identifier",
                                  "src": "2320:5:0"
                                }
                              ],
                              "id": 165,
                              "name": "FunctionCall",
                              "src": "2305:21:0"
                            }
                          ],
                          "id": 166,
                          "name": "ExpressionStatement",
                          "src": "2305:21:0"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "transfer",
                                    "referencedDeclaration": null,
                                    "type": "function (uint256)"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 5,
                                        "type": "address",
                                        "value": "seller"
                                      },
                                      "id": 167,
                                      "name": "Identifier",
                                      "src": "2337:6:0"
                                    }
                                  ],
                                  "id": 169,
                                  "name": "MemberAccess",
                                  "src": "2337:15:0"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "balance",
                                    "referencedDeclaration": null,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 199,
                                        "type": "contract Purchase",
                                        "value": "this"
                                      },
                                      "id": 170,
                                      "name": "Identifier",
                                      "src": "2353:4:0"
                                    }
                                  ],
                                  "id": 171,
                                  "name": "MemberAccess",
                                  "src": "2353:12:0"
                                }
                              ],
                              "id": 172,
                              "name": "FunctionCall",
                              "src": "2337:29:0"
                            }
                          ],
                          "id": 173,
                          "name": "ExpressionStatement",
                          "src": "2337:29:0"
                        }
                      ],
                      "id": 174,
                      "name": "Block",
                      "src": "1931:443:0"
                    }
                  ],
                  "id": 175,
                  "name": "FunctionDefinition",
                  "src": "1833:541:0"
                }
              ],
              "id": 176,
              "name": "ContractDefinition",
              "src": "28:2349:0"
            }
          ],
          "id": 177,
          "name": "SourceUnit",
          "src": "0:2377:0"
        },
        "compiler": {
          "name": "solc",
          "version": "0.4.19+commit.c4cbbb05.Emscripten.clang"
        },
        "networks": {
          "1517709285657": {
            "events": {},
            "links": {},
            "address": "0xc1f96c26e494f35d6bdce6ddd58f7bd9fe2a9c26"
          }
        },
        "schemaVersion": "1.0.1",
        "updatedAt": "2018-02-04T06:19:05.284Z"
      }
)
MyContract.setProvider(provider);

var accounts = web3.eth.accounts;

function startContract()
{
    Purchase.new({value: 100}).then(function(res) { sc = Purchase.at(res.address) });

    Purchase.at(sc.address).then(function(instance){return instance.confirmPurchase({from: accounts[1], value: 100});});
    
    Purchase.at(sc.address).then(function(instance){return instance.confirmReceived({from: accounts[1]});});   
}
