"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6862],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>u});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(o),u=a,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||i;return o?n.createElement(m,r(r({ref:t},d),{},{components:o})):n.createElement(m,r({ref:t},d))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},71401:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=o(87462),a=o(63366),i=(o(67294),o(3905)),r=["components"],s={id:"maintain-guides-democracy",title:"Participate in Democracy",sidebar_label:"Participate in Democracy",description:"Steps on how to participate in democracy.",keywords:["democracy","council","action","proposal"],slug:"../maintain-guides-democracy"},l=void 0,c={unversionedId:"maintain/maintain-guides-democracy",id:"maintain/maintain-guides-democracy",title:"Participate in Democracy",description:"Steps on how to participate in democracy.",source:"@site/../docs/maintain/maintain-guides-democracy.md",sourceDirName:"maintain",slug:"/maintain-guides-democracy",permalink:"/docs/maintain-guides-democracy",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-democracy.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1672759712,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{id:"maintain-guides-democracy",title:"Participate in Democracy",sidebar_label:"Participate in Democracy",description:"Steps on how to participate in democracy.",keywords:["democracy","council","action","proposal"],slug:"../maintain-guides-democracy"},sidebar:"docs",previous:{title:"Validator Best Practices",permalink:"/docs/maintain-guides-avoid-slashing"},next:{title:"Participate in OpenGov",permalink:"/docs/maintain-guides-opengov"}},d={},p=[{value:"Important Parameters",id:"important-parameters",level:2},{value:"Proposing an Action",id:"proposing-an-action",level:2},{value:"Submitting a Preimage",id:"submitting-a-preimage",level:2},{value:"Endorsing a Proposal",id:"endorsing-a-proposal",level:2},{value:"Voting on a Proposal",id:"voting-on-a-proposal",level:2},{value:"Unlocking Locked Tokens",id:"unlocking-locked-tokens",level:2},{value:"With a Ledger hardware wallet or Unlocking Very Old Locks",id:"with-a-ledger-hardware-wallet-or-unlocking-very-old-locks",level:4},{value:"Delegate a Vote",id:"delegate-a-vote",level:2},{value:"Undelegate a Vote",id:"undelegate-a-vote",level:2},{value:"Voting with a Governance Proxy",id:"voting-with-a-governance-proxy",level:2},{value:"Interpreting On-Chain Voting Data",id:"interpreting-on-chain-voting-data",level:2}],h={toc:p};function u(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"The contents in this guide are subject to change",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"OpenGov: Polkadot\u2019s next generation of decentralized governance is now live on Kusama network. Check\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-opengov"},"OpenGov page")," for a detailed explanation on the upcoming changes to the\nPolkadot governance.")),(0,i.kt)("p",null,"The public referenda chamber is one of the three bodies of on-chain governance as it's instantiated\nin Polkadot and Kusama. The other two bodies are the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-join-council"},"council")," and the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-governance#technical-committee"},"technical committee"),"."),(0,i.kt)("p",null,"Public referenda can be proposed and voted on by any token holder in the system as long as they\nprovide a bond. After a proposal is made, others can agree with it by ",(0,i.kt)("em",{parentName:"p"},"endorsing")," it and putting up\ntokens equal to the original bond. During every launch period, the most endorsed proposal will be\nmoved to the public referenda table where it can be voted upon. Voters who are willing to lock up\ntheir tokens for a greater duration of time can do so and get their votes amplified. For more\ndetails on the governance system please see ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"here"),"."),(0,i.kt)("p",null,"This guide will instruct token holders how to propose and vote on public referenda using the\nDemocracy module. Below are a few links to stay informed and directly engage with the community."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://matrix.to/#/#polkadot-direction:matrix.parity.io"},"Polkadot Direction")," - a place to\ndiscuss governance and the future of Polkadot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://matrix.to/#/#kusama:matrix.parity.io"},"Kusama Direction")," - a place to discuss governance\nand the future of Kusama."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.polkassembly.io"},"Polkadot")," and ",(0,i.kt)("a",{parentName:"li",href:"https://kusama.polkassembly.io"},"Kusama"),"\nPolkassembly - for current referenda, latest proposals, motions, treasury proposals, tips,\nbounties, and more."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://matrix.to/#/#dailydigest:web3.foundation"},"Polkadot Daily Digest")," - News about what is\nhappening in the Polkadot ecosystem, published every weekday except holidays.")),(0,i.kt)("h2",{id:"important-parameters"},"Important Parameters"),(0,i.kt)("p",null,"The important parameters to be aware of when voting using the Democracy module are as follows:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Launch Period")," - How often new public referenda are launched."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Voting Period")," - How often votes for referenda are tallied."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Emergency Voting Period")," - The minimum voting period for a fast-tracked emergency referendum."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Minimum Deposit")," - The minimum amount to be used as a deposit for a public referendum proposal."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Enactment Period")," - The minimum period for locking funds ",(0,i.kt)("em",{parentName:"p"},"and")," the period between a proposal\nbeing approved and enacted."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cooloff Period")," - The period in blocks where a proposal may not be re-submitted after being\nvetoed."),(0,i.kt)("h2",{id:"proposing-an-action"},"Proposing an Action"),(0,i.kt)("p",null,'Proposing an action to be taken requires you to bond some tokens. In order to ensure you have enough\ntokens to make the minimum deposit, you can check the parameter in the chain state. Navigate to\nDeveloper > Chain State > Constants > selected constant query: democracy > minimumDeposit: u128 and\nthen click on the plus button. The bonded tokens will only be released once the proposal is tabled\n(that is, brought to a vote); there is no way for the user to "revoke" their proposal and get the\nbond back before it has become a referendum. Since it is essentially impossible to predict\ndefinitely when a proposal may become a referendum (if ever), this means that any tokens bonded will\nbe locked for an indeterminate amount of time.'),(0,i.kt)("admonition",{title:"Proposals cannot be revoked by the proposer, even if they never turn into a referendum",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is important to realize that there is no guarantee that DOT you use for proposing or endorsing a\nproposal will be returned to that account in any given timeframe.")),(0,i.kt)("p",null,'order to submit a proposal, you will need to submit what\'s called the preimage hash. The preimage\nhash is simply the hash of the proposal to be enacted. The easiest way to get the preimage hash is\nby clicking on the "Submit preimage" button and configuring the action that you are proposing.'),(0,i.kt)("p",null,"The example below demonstrates the creation of a proposal on Kusama (",(0,i.kt)("strong",{parentName:"p"},"the same procedure applies to\nPolkadot"),'). If you wanted to propose that a remark "Expect Chaos!" is added, the preimage hash\nwould be ',(0,i.kt)("inlineCode",{parentName:"p"},"0x8ac3f722caf7677254e25ca4ad77d533ca893c7d2ad4009e258d749f2004ef94"),". You can copy this\npreimage hash and save it for the next step. There is no need to click Submit Preimage at this\npoint, though you could. We'll go over that in the next section."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"submit preimage",src:o(71214).Z,width:"1182",height:"526"})),(0,i.kt)("p",null,'Now you will click on the "Submit proposal" button and enter the preimage hash in the input titled\n"preimage hash" and ',(0,i.kt)("em",{parentName:"p"},"at least"),' the minimum deposit into the "locked balance" field. Click on the\n"Submit proposal" button and confirm the transaction. You should now see your proposal appear in the\n"proposals" column on the page.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"submit proposal",src:o(95545).Z,width:"1184",height:"456"})),(0,i.kt)("p",null,"Now your proposal is visible to anyone who accesses the chain and others can endorse it or submit a\npreimage. However, it's hard to tell what exactly this proposal does since it shows the hash of the\naction. Other holders will not be able to make a judgement on whether they endorse it or not until\nsomeone submits the actual preimage for this proposal. In the next step, you will submit the\npreimage."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"proposal hash",src:o(70657).Z,width:"1424",height:"276"})),(0,i.kt)("h2",{id:"submitting-a-preimage"},"Submitting a Preimage"),(0,i.kt)("p",null,"The act of making a proposal is split from submitting the preimage for the proposal since the\nstorage cost of submitting a large preimage could be pretty expensive. Allowing for the preimage\nsubmission to come as a separate transaction means that another account could submit the preimage\nfor you if you don't have the funds to do so. It also means that you don't have to pay so many funds\nright away as you can prove the preimage hash out-of-band."),(0,i.kt)("p",null,"However, at some point before the proposal passes you will need to submit the preimage or else the\nproposal cannot be enacted. The guide will now show you how to do this."),(0,i.kt)("p",null,'Click on the blue "Submit preimage" button and configure it to be the same as what you did before to\nacquire the preimage hash. This time, instead of copying the hash to another tab, you will follow\nthrough and click "Submit preimage" and confirm the transaction.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"submit preimage",src:o(71214).Z,width:"1182",height:"526"})),(0,i.kt)("p",null,"Once the transaction is included you should see the UI update with the information for your already\nsubmitted proposal."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"proposals",src:o(60580).Z,width:"1424",height:"276"})),(0,i.kt)("h2",{id:"endorsing-a-proposal"},"Endorsing a Proposal"),(0,i.kt)("p",null,"Endorsing a proposal means that you are agreeing with the proposal and backing it with an equal\namount of deposit as was originally locked. The bonded tokens will be released once the proposal is\ntabled (that is, brought to a vote), just like the original proposer's bond. By endorsing a proposal\nyou will move it higher up the rank of proposals. The most endorsed proposal ","\u2014"," in value, not\nthe number of supporters ","\u2014"," will be brought to a referendum every launch period."),(0,i.kt)("p",null,"It is important to note that there is no way to stop or cancel endorsing a proposal once it has been\ndone. Therefore, the DOT that was endorsed will be reserved until the proposal is tabled as a\nreferendum. This is an indeterminate amount of time, since there is no guarantee that a proposal\nwill become a referendum for a given period, as other proposals may be proposed and tabled before\nit."),(0,i.kt)("p",null,"Note that it is possible for a single account to endorse a proposal multiple times. This is by\ndesign; it is the value, not the number of endorsements ",(0,i.kt)("em",{parentName:"p"},"per se"),", that counts in terms of weighting.\nIf there were a limit of one endorsement per account, it would be trivial for a user with, for\nexample, 1000 DOT to create ten accounts with 100 DOT instead of a single account with 1000 DOT.\nThus, no restrictions are made on the number of times a single account can endorse a proposal."),(0,i.kt)("p",null,'To endorse a proposal, navigate to the proposal you want to endorse and click on the "Endorse"\nbutton.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"endorsement button",src:o(16014).Z,width:"1440",height:"128"})),(0,i.kt)("p",null,'You will be prompted with the full details of the proposal (if the preimage has been submitted!) and\ncan then broadcast the transaction by clicking the blue "Endorse" button.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"endorsement confirmed",src:o(50937).Z,width:"1184",height:"356"})),(0,i.kt)("p",null,"Once successful, you will see your endorsement appear in the dropdown in the proposal details."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"endorsement result",src:o(33346).Z,width:"1440",height:"336"})),(0,i.kt)("h2",{id:"voting-on-a-proposal"},"Voting on a Proposal"),(0,i.kt)("p",null,"At the end of each launch period, the most endorsed proposal will move to a referendum. During this\ntime you can cast a vote for or against the proposal. You may also lock up your tokens for a greater\nlength of time to weigh your vote more strongly. During the time your tokens are locked, you are\nunable to transfer them, however they can still be used for further votes. Locks are layered on top\nof each other, so an eight-week lock does not become a 15-week lock if you vote again a week later,\nrather another eight-week lock is placed to extend the lock just one extra week."),(0,i.kt)("admonition",{title:"Voting and staking locks can overlap",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"A user can use staked funds to vote on referenda (and/or to vote for Councillors)."),(0,i.kt)("li",{parentName:"ul"},"A user is only prohibited from transferring these funds to another account."))),(0,i.kt)("p",null,"To vote on a referendum, navigate to the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/democracy/"},'"Democracy" tab of Polkadot Apps'),'. Any active referendum\nwill show in the "referenda" column. Click the blue button "Vote" to cast a vote for the referendum.'),(0,i.kt)("p",null,'If you would like to cast your vote for the proposal select the "Aye, I approve" option. If you\nwould like to cast your vote against the proposal in the referendum you will select "Nay, I do not\napprove" option.'),(0,i.kt)("p",null,"The endorsement option is to select your conviction for this vote. The longer you are willing to\nlock your tokens, the stronger your vote will be weighted. The timeline for the conviction starts\nafter the voting period ends; tokens used for voting will always be locked until the end of the\nvoting period, no matter what conviction you vote with. Unwillingness to lock your tokens means that\nyour vote only counts for 10% of the tokens that you hold, while the maximum lock-up of 896 days\nmeans you can make your vote count for 600% of the tokens that you hold. It is possible to vote with\ntokens already locked by staking."),(0,i.kt)("p",null,'When you are comfortable with the decision you have made, click the blue "Vote" button to submit\nyour transaction and wait for it to be included in a block.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"voting",src:o(76544).Z,width:"940",height:"712"})),(0,i.kt)("h2",{id:"unlocking-locked-tokens"},"Unlocking Locked Tokens"),(0,i.kt)("p",null,"Like ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-DOT#lazy-vesting"},"vesting"),", the tokens that are locked in democracy are\nunlocked lazily. This means that you, the user, must explicitly call an unlock extrinsic to make\nyour funds available again after the lock expires. Unbonding is another term you hear a lot in\nPolkadot, it means withdrawing your DOT that was used in staking. To know more about it, please see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-nominate-polkadot"},"here"),"."),(0,i.kt)("p",null,'You can do this from the "Accounts" page in\n',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Polkadot-JS Apps"),', unless you use Ledger (see below).\nFirst, check that your account has a "democracy" lock by opening the details on your balance. In the\nexample below the account has 150 KSM locked in democracy.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"democracy balance details",src:o(41451).Z,width:"342",height:"214"})),(0,i.kt)("p",null,'Now you can click the menu button (the three dots) and find the option that says "Clear expired\ndemocracy locks". After selecting this option you may confirm the transaction and your locks will be\ncleared when successful.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"democracy clear locks",src:o(99381).Z,width:"366",height:"933"})),(0,i.kt)("h4",{id:"with-a-ledger-hardware-wallet-or-unlocking-very-old-locks"},"With a Ledger hardware wallet or Unlocking Very Old Locks"),(0,i.kt)("p",null,"If you do not see an option to clear expired democracy votes, it may be that the lock is very old.\nOr, if you are using the Ledger hardware wallet, you will not be able to issue the batch Unlock\naction from the UI."),(0,i.kt)("p",null,"Instead, you must clear the lock by directly issuing the correct extrinsics."),(0,i.kt)("p",null,"Navigate to the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Extrinsics page")," and submit the\nfollowing extrinsic: ",(0,i.kt)("inlineCode",{parentName:"p"},"democracy.removeVote(index)"),' using the account that you voted with. For the\nindex number (ReferendumIndex), enter the number of the referendum for which you voted ("12" in the\nimage below).'),(0,i.kt)("p",null,"The number of the referendum for which you voted is visible in an explorer such as Polkascan."),(0,i.kt)("p",null,'You need to press the "Submit Transaction" button to submit the extrinsic.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"democracy clear_lock_extrinsic_1",src:o(33022).Z,width:"871",height:"234"})),(0,i.kt)("p",null,"Now submit the following extrinsic: `democracy.unlock(target), where the target is your account\naddress."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"democracy clear_lock_extrinsic_2",src:o(5066).Z,width:"869",height:"237"})),(0,i.kt)("p",null,"If you return to the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts page"),", you should see that\nthe democracy lock has been released."),(0,i.kt)("p",null,"Note that this applies only to locked DOT that were used for voting on referenda. In order to unlock\nDOT locked by voting for members of the Polkadot Council, you need to go to the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/council"},"Council"),' page, click "Vote", and then click on "Unvote\nAll".'),(0,i.kt)("h2",{id:"delegate-a-vote"},"Delegate a Vote"),(0,i.kt)("p",null,"If you are too busy to keep up and vote on upcoming referenda, there is an option to delegate your\nvote to another account whose opinion you trust. When you delegate to another account, that account\ngets the added voting power of your tokens along with the conviction that you set. The conviction\nfor delegation works just like the conviction for regular voting, except your tokens may be locked\nlonger than they would normally since locking resets when you undelegate your vote."),(0,i.kt)("p",null,"The account that is being delegated to does not make any special action once the delegation is in\nplace. They can continue to vote on referenda how they see fit. The difference is now when the\nDemocracy system tallies votes, the delegated tokens now are added to whatever vote the delegatee\nhas made."),(0,i.kt)("p",null,'You can delegate your vote to another account and even attach a "Conviction" to the delegation.\nNavigate to the ',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},'"Accounts" tab on Polkadot-JS UI'),' and\nclick on the three vertical dots and select "Delegate democracy votes" option for the account of\nyour choice. Then you would be presented with a pop-up window which lets you enter the account\ndetails of the delegated account, delegated amount and conviction. You can enter the relevant\ndetails and click on the delegate button and then sign and submit the transaction.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"delegate",src:o(40639).Z,width:"1880",height:"724"})),(0,i.kt)("p",null,"Your delegation will count toward whatever account you delegated for votes on until you explicitly\nundelegate your vote."),(0,i.kt)("admonition",{title:"Query the chain state for an account's delegation preferences",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It is possible to query the delegation preferences of any actively delegating account on the network\nthrough ",(0,i.kt)("inlineCode",{parentName:"p"},"democracy.votingOf")," extrinsic."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"query delegation",src:o(83181).Z,width:"2002",height:"992"}))),(0,i.kt)("h2",{id:"undelegate-a-vote"},"Undelegate a Vote"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If there is an existing lock due to a previous delegation change or undelegation, any new change or\nundelegation will restart the lock period for the larger DOT amount and the longest conviction\nperiod between the existing and the new lock."),(0,i.kt)("p",{parentName:"admonition"},"This will only matter to accounts with conviction, as the accounts with no conviction don't have any\nlock period."),(0,i.kt)("p",{parentName:"admonition"},"Examples:"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delegate 500 DOT with 1x conviction, then change delegation to 1000 DOT with 1x conviction, the\nlock period will reset for 1000 DOT with 1x conviction.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delegate 500 DOT with 3x conviction, then change the delegation to 1000 DOT with 1x conviction,\nthe lock period will reset for 1000 DOT with 3x conviction.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delegate 500 DOT with 1x conviction, then change the delegation to 200 DOT with 1x conviction,\nthe lock period will reset for 500 DOT with 1x conviction."))),(0,i.kt)("p",{parentName:"admonition"},"To understand this in further detail checkout\n",(0,i.kt)("a",{parentName:"p",href:"https://substrate.stackexchange.com/questions/5067/delegating-and-undelegating-during-the-lock-period-extends-it-for-the-initial-am"},"this stackexchange post."))),(0,i.kt)("p",null,'You may decide at some point in the future to remove your delegation to a target account. In this\ncase, your tokens will be locked for the maximum amount of time in accordance with the conviction\nyou set at the beginning of the delegation. For example, if you chose "2x" delegation for four weeks\nof lock-up time, your tokens will be locked for 4 weeks after sending the ',(0,i.kt)("inlineCode",{parentName:"p"},"undelegate")," transaction.\nOnce your vote has been undelegated, you are in control of making votes with it once again. You can\nstart to vote directly, or choose a different account to act as your delegate."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"undelegate")," transaction must be sent from the account that you wish to clear of its delegation.\nFor example, if Alice has delegated her tokens to Bob, Alice would need to be the one to call the\n",(0,i.kt)("inlineCode",{parentName:"p"},"undelegate")," transaction to clear her delegation."),(0,i.kt)("p",null,"The easiest way to do this is from the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},'"Accounts" tab on Polkadot-JS UI')," where you can manage the\ndelegation of your account."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"manage delegation",src:o(43339).Z,width:"1990",height:"224"})),(0,i.kt)("p",null,"When you click on \"manage delegation\", you would be presented with a pre-populated pop-up window\nwith that account's delegation preferences. Here, you have an option to undelegate or save the\nmodifications made to the account's delegation preferences."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"undelegate",src:o(55002).Z,width:"1884",height:"732"})),(0,i.kt)("h2",{id:"voting-with-a-governance-proxy"},"Voting with a Governance Proxy"),(0,i.kt)("p",null,'Making a vote on behalf of a stash requires a "proxy" transaction from the Proxy pallet. When you\nchoose this transaction from the "Extrinsics" tab, it will let you select "vote" from the Democracy\npallet, and you will specify the index of the referendum that is being voted, the judgement (i.e.\n"Aye" for approval or "Nay" for rejection), and the conviction, just like a normal vote.'),(0,i.kt)("p",null,"For more material on adding and removing Governance proxies, as well as other types, please see the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-proxies"},"Proxy page"),"."),(0,i.kt)("h2",{id:"interpreting-on-chain-voting-data"},"Interpreting On-Chain Voting Data"),(0,i.kt)("p",null,"Consider the following example showcasing how votes would be displayed on a block explorer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Nay 0.1x => 0\nNay 1x => 1\nNay 2x => 2\nNay 3x => 3\nNay 4x => 4\nNay 5x => 5\nNay 6x => 6\nAye 0.1x => 128\nAye 1x => 129\nAye 2x => 130\nAye 3x => 131\nAye 4x => 132\nAye 5x => 133\nAye 6x => 134\n")),(0,i.kt)("p",null,'At first glance, it may be difficult to interpret what you voted on. We need to take a step back and\nconsider the "voting data" at the binary level.'),(0,i.kt)("p",null,"The vote is stored as a byte using a bitfield data structure and displayed on the block explorer as\na decimal integer. The bitfield stores both the conviction and aye/nay boolean, where the boolean is\nrepresented using the MSB of the byte. This would mean that the grouping of the 7 remaining bits is\nused to store the conviction."))}u.isMDXComponent=!0},40639:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/delegate-vote-a8b4d534e0e004f8d0d4a32a45f3a77a.png"},50937:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/endorse-7e22987ceebef0c1ce17f475510eacc9.png"},16014:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/endorse1-6f9ed6c3eb99cad52bd07e250307b397.png"},33346:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/endorsed-list-460b771aedaf6e91f9caaaf728d76dfd.png"},43339:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/manage-delegation-19501197d96e688a08f257a1443f18cd.png"},70657:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/proposal-hash-1ae67063393c7e77001e538b9d4a67af.png"},60580:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/proposals-9b3cc3a8bd2ff1c01c0dbc7c90950d3f.png"},83181:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/query-delegation-fece7720f6282de8928688d61ee38477.png"},71214:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/submit_preimage-b0165c4aa5615a416bc1698ff21cba2e.png"},95545:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/submit_proposal-24cc24bb4fdb502da80a28082f779da8.png"},55002:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/undelegate-save-002a17067954a098e2942aa1a7583698.png"},76544:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/voting-4abb1178436833648da30b63d860aa10.png"},41451:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/democracy_balance_details-56b5c71fe66fc4a0d66ba4820a3cc6a9.png"},33022:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/democracy_clear_lock_extrinsic_1-c42556da5e59023abb388eac1a12aee2.png"},5066:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/democracy_clear_lock_extrinsic_2-f6a313a6755d15eb6ab26d33edb80a72.png"},99381:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/democracy_clear_locks-028d6202e19ad4410e07a5da8bb69277.png"}}]);