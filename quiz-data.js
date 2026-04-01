// quiz-data.js
const quizData = [
  {
    id: 1,
    question: "SaaS環境内の次のタスクのうち、クラウドの顧客が責任を負わないものはどれですか？",
    options: ["A.認証メカニズム", "B.ブランディング", "C.トレーニング", "D.ユーザーアクセス"],
    answer: "A",
    explanation: "The authentication mechanisms and implementations are the responsibility of the cloud provider because they are core components of the application platform and service. Within a SaaS implementation, the cloud customer will provision user access, deploy branding to the application interface (typically), and provide or procure training for its users."
  },
  {
    id: 2,
    question: "ユーザーアカウント/アクセスのレビューとメンテナンスに誰が関与する必要がありますか ？",
    options: ["A.ユーザーのマネージャー", "B.セキュリティマネージャー", "C.経理部", "D.インシデント対応チーム"],
    answer: "A",
    explanation: ""
  },
  {
    id: 3,
    question: "次の用語のうち、リスク許容の一般的に使用されるカテゴリではないものはどれですか？",
    options: ["A.中程度", "B.クリティカル", "C.最小限", "D.受け入れ"],
    answer: "D",
    explanation: "Accepted is not a risk acceptance category. The risk acceptance categories are minimal, low, moderate, high, and critical."
  },
  {
    id: 4,
    question: "米国国務省は、技術輸出として知られているものとして何を管理していますか？",
    options: ["A.DRM", "B.ITAR", "C.EAR", "D.EAL"],
    answer: "B",
    explanation: "ITAR is a Department of State program. Evaluation assurance levels are part of the Common Criteria standard from ISO. Digital rights management tools are used for protecting electronic processing of intellectual property."
  },
  {
    id: 7,
    question: "ファイルシステムレベルで暗号化を使用する以外に、オブジェクトストレージシステムに格納されているデータを保護するために最も広く使用されているテクノロジーはどれですか。",
    options: ["A.TLS", "B.HTTPS", "C.VPN", "D.IRM"],
    answer: "D",
    explanation: "Information rights management (IRM) technologies allow security controls and policies to be enforced on a data object regardless of where it resides. They also allow for extended controls such as expirations and copying restrictions, which are not available through traditional control mechanisms. Hypertext Transfer Protocol Secure (HTTPS), virtual private network (VPN), and Transport Layer Security (TLS) are all technologies and protocols that are widely used with cloud implementations for secure access to systems and services and likely will be used in conjunction with other object data protection strategies."
  },
  {
    id: 8,
    question: "クラウドシステムは、組織のBCDRソリューションにますます使用されています。 クラウドコンピューティングのどの側面がBCDRの使用を最も魅力的にしていますか？",
    options: ["A.オンデマンドのセルフサービス", "B.測定サービス", "C.移植性", "D.幅広いネットワークアクセス"],
    answer: "B",
    explanation: "Business continuity and disaster recovery (BCDR) solutions largely sit idle until they are actually needed. This traditionally has led to increased costs for an organization because physical hardware must be purchased and operational but is not used. By using a cloud system, an organization will only pay for systems when they are being used and only for the duration of use, thus eliminating the need for extra hardware and costs. Portability is the ability to easily move services among different cloud providers. Broad network access allows access to users and staff from anywhere and from different clients, and although this would be important for a BCDR situation, it is not the best answer in this case. On-demand self-service allows users to provision services automatically and when needed, and although this too would be important for BCDR situations, it is not the best answer because it does not address costs or the biggest benefits to an organization."
  },
  {
    id: 9,
    question: "次のストレージタイプのうち、従来のファイルシステムとツリー構造に最も密接に関連して いるのはどれですか。",
    options: ["A.ボリューム", "B.非構造化", "C.オブジェクト", "D.構造化"],
    answer: "A",
    explanation: "Volume storage works as a virtual hard drive that is attached to a virtual machine. The operating system sees the volume the same as how a traditional drive on a physical server would be seen."
  },
  {
    id: 10,
    question: "アプリケーションまたはシステムの要件収集への入力として含まれないのは、次のうちどれ ですか？",
    options: ["A.ユーザー", "B.管理", "C.規制当局", "D.監査人"],
    answer: "D",
    explanation: ""
  },
  {
    id: 11,
    question: "監査範囲ステートメントは、監査の制限と結果を定義します。 監査範囲ステートメントの一部として含まれないものは次のうちどれですか？",
    options: ["A.レポート", "B.認証", "C.請求", "D.除外"],
    answer: "C",
    explanation: "Billing for an audit, or other cost-related items, would not be part of an audit scope statement and would instead be handled prior to the actual audit as part of the contract between the organization and auditors. Reports, exclusions to the scope of the audit, and required certifications on behalf of the systems or auditors are all crucial elements of an audit scope statement."
  },
  {
    id: 12,
    question: "次のセキュリティの側面のうち、クラウドプロバイダーの責任はどれですか。",
    options: ["A.規制遵守", "B.物理的なセキュリティ", "C.オペレーティングシステムの監査", "D.開発者の個人的なセキュリティ"],
    answer: "B",
    explanation: "Regardless of the particular cloud service used, physical security of hardware and facilities is always the sole responsibility of the cloud provider. The cloud provider may release information about their physical security policies and procedures to ensure any particular requirements of potential customers will meet their regulatory obligations. Personal security of developers and regulatory compliance are always the responsibility of the cloud customer. Responsibility for operating systems, and the auditing of them, will differ based on the cloud service category used."
  },
  {
    id: 13,
    question: "認定と規格が異なれば、データセンターの設計と運用に対するアプローチも異なります。多くの従来のアプローチは段階的な方法論を使用していますが、次のうちどれがデータセンターの設計にマクロレベルのアプローチを利用していますか？",
    options: ["A.IDCA", "B.BICSI", "C.Uptime Institute", "D.NFPA"],
    answer: "A",
    explanation: "The Infinity Paradigm of the International Data Center Authority (IDCA) takes a macro-level approach to data center design. The IDCA does not use a specific, focused approach on specific components to achieve tier status. Building Logging Industry Consulting Services International (BICSI) issues certifications for data center cabling. The National Fire Protection Association (NFPA) publishes a broad range of fire safety and design standards for many different types of facilities. The Uptime Institute publishes the most widely known and used standard for data center topologies and tiers."
  },
  {
    id: 14,
    question: "TLSが使用する2つのプロトコルは何ですか？",
    options: ["A.ハンドシェイクと記録", "B.転送して開始", "C.ハンドシェイクとトランスポート", "D.記録して送信"],
    answer: "A",
    explanation: "TLS uses the handshake protocol to establish and negotiate the TLS connection, and it uses the record protocol for the secure transmission of data."
  },
  {
    id: 15,
    question: "SLAには、契約のパフォーマンスとクラウドプロバイダーとクラウドカスタマー間の満足度 に関する公式の要件が含まれています。 SLAの一部として測定可能なメトリックと要件を持つコンポーネントではないものは次のうちどれですか？",
    options: ["A.ネットワーク", "B.ユーザー", "C.メモリ", "D.CPU"],
    answer: "B",
    explanation: "Dealing with users or user access would not be an appropriate item for inclusion in an SLA specifically. However, user access and user experience would be covered indirectly through other metrics. Memory, CPU, and network resources are all typically included within an SLA for availability and response times when dealing with any incidents."
  },
  {
    id: 16,
    question: "組織には、BCDRの状況を活性化するために業界全体で共通する多くの理由が考えられます 。次のうち、BCDRプランをアクティブ化する一般的な理由ではないものはどれですか？",
    options: ["A.自然災害", "B.ユーティリティの停止", "C.スタッフの損失", "D.テロ攻撃"],
    answer: "C",
    explanation: ""
  },
  {
    id: 17,
    question: "使用しているクラウドモデルに関係なく、クラウドのお客様の責任は次のうちどれですか。",
    options: ["A.インフラストラクチャ", "B.プラットフォーム", "C.アプリケーション", "D.データ"],
    answer: "D",
    explanation: "Regardless of which cloud-hosting model is used, the cloud customer always has sole responsibility for the data and its security."
  },
  {
    id: 18,
    question: "クラウドBC / DRアクティビティで一般的に利用可能なさまざまなモデルには、以下を除くすべてが含ま れます。",
    options: ["A.プライベートアーキテクチャ、クラウドバックアップ", "B.クラウドプロバイダー、別のクラウドプロバイダーからのバックアップ", "C.クラウドプロバイダー、同じプロバイダーからのバックアップ", "D.クラウドプロバイダー、プライベートプロバイダーからのバックアップ"],
    answer: "D",
    explanation: "This is not a normal configuration and would not likely provide genuine benefit."
  },
  {
    id: 19,
    question: "あなたは政府の研究施設で働いています。あなたの組織は、他の政府の研究組織とデータを 共有することがよくあります。 組織全体でシングルサインオンエクスペリエンスを作成し、各組織のユーザーがその組織によって発行されたユーザーID /認証を使用してサインインし、他のすべての組織の調査データにアクセスできるようにします。 各組織のデータストアを他のすべての組織に複製するのではなく（これは、この目標を達成 する1つの方法です）、代わりに、すべてのユーザーが各組織の特定のストレージリソースにアクセスできるようにします。 組織間で各ユーザーのユーザーIDと認証資格情報を渡すために、どのプロトコル/言語/モチーフを利用する可能性が最も高いですか？",
    options: ["A.Representational State Transfer (REST)", "B.Security Assertion Markup Language (SAML)", "C.Simple Object Access Protocol (SOAP)", "D.Hypertext Markup Language (HTML)"],
    answer: "B",
    explanation: ""
  },
  {
    id: 20,
    question: "クラウド環境にいるクラウドユーザーは、データの保存方法とシステムの展開方法に関する 多くの洞察と知識を失っています。 ISO / IECクラウド標準のどの概念が、これらの問題についてクラウドの顧客に情報を提供するクラウドプロバイダーの必要性に関連していますか？",
    options: ["A.開示", "B.透明度", "C.開放性", "D.ドキュメント"],
    answer: "B",
    explanation: "Transparency is the official process by which a cloud provider discloses insight and information into its configurations or operations to the appropriate audiences. Disclosure, openness, and documentation are all terms that sound similar to the correct answer, but none of them is the correct term in this case."
  },
  {
    id: 21,
    question: "あなたは監査スコープステートメントの作成を任されており、プロジェクトの概要を作成しています。次のうち、監査スコープステートメントに通常含まれないものはどれですか？",
    options: ["A.目的の声明", "B.成果物", "C.分類", "D.コスト"],
    answer: "D",
    explanation: ""
  },
  {
    id: 22,
    question: "次のうち、クラウドセキュリティアライアンスによって公開されたクラウドコントロールマトリックス内で定義されたセキュリティコントロールドメインの1つではないものはどれですか？",
    options: ["A.財務", "B.人材", "C.モバイルセキュリティ", "D.IDおよびアクセス管理"],
    answer: "A",
    explanation: ""
  },
  {
    id: 23,
    question: "TLSの一部として、どのプロトコルが実際の安全な通信とデータの送信を処理しますか？",
    options: ["A.交渉", "B.ハンドシェイク", "C.転送", "D.レコード"],
    answer: "D",
    explanation: "The TLS record protocol is the actual secure communications method for transmitting data; it's responsible for encrypting and authenticating packets throughout their transmission between the parties, and in some cases it also performs compression. The TLS handshake protocol is what negotiates and establishes the TLS connection between two parties and enables the secure communications channel to then handle data transmissions. Negotiation and transfer are not protocols under TLS."
  },
  {
    id: 24,
    question: "次のストレージタイプのうち、Infrastructure as a Service（IaaS）ソリューションで使用されているのはどれですか？",
    options: ["A.ボリュームとブロック", "B.構造化されたオブジェクト", "C.構造化されていない一時的な", "D.ボリュームとオブジェクト"],
    answer: "D",
    explanation: ""
  },
  {
    id: 25,
    question: "以下はすべて、クラウドデータの移植性を向上させ、ベンダーロックインの可能性を最小限 に抑えるための手法です。",
    options: ["A.引っ越しに物理的な制限がないことを確認します", "B.クラウド運用全体で広くDRMおよびDLPソリューションを使用する", "C.移植性をサポートするために有利な契約条件を確保する", "D.独自のデータ形式を避ける"],
    answer: "B",
    explanation: "DRM and DLP are used for increased authentication/access control and egress monitoring, respectively, and would actually decrease portability instead of enhancing it."
  },
  {
    id: 26,
    question: "BCDRテストを定期的に実行することは、プロセスとドキュメントが依然として関連性があり効率的であることを確認するためのベストプラクティスですが、定期的な間隔外でBCDR レビューを実施する理由を表すものは次のうちどれですか。",
    options: ["A.スタッフの変更", "B.アプリケーションの変更", "C.規制の変更", "D.管理の変更"],
    answer: "B",
    explanation: ""
  },
  {
    id: 27,
    question: "クラウドの顧客がクラウド環境内で使用するリソースとオファリングにのみ支払い、それらを消費している間のみ支払う、次の概念のどれですか？",
    options: ["A.消耗品サービス", "B.測定サービス", "C.請求可能なサービス", "D.従量制サービス"],
    answer: "B",
    explanation: "Measured service is where cloud services are delivered and billed in a metered way, where the cloud customer only pays for those that they actually use, and for the duration of time that they use them."
  },
  {
    id: 28,
    question: "クラウドデータセンターキャンパスの物理的なレイアウトには、____________を除く次のすべての冗長性を含める必要があります。",
    options: ["A.物理的な境界セキュリティ制御（フェンス、ライト、壁など）", "B.管理/サポートスタッフの構築", "C.電気事業ライン", "D.通信接続線"],
    answer: "B",
    explanation: ""
  },
  {
    id: 29,
    question: "オンプレミス環境からホスト型クラウドサービスに移行するオプションを検討する場合、組織は、外部エンティティがコラボレーション目的でクラウドデータにアクセスできるようにするリスクを____________と比較検討する必要があります。",
    options: ["A.レガシー環境でデータを保護していません", "B.データを公開する", "C.コラボレーションを強化するために外部の担当者をレガシーワークスペースに招待する", "D.コラボレーションの目的でレガシー環境の外部にデータを送信する"],
    answer: "D",
    explanation: ""
  },
  {
    id: 30,
    question: "クラウドの分野横断的な側面のどれが、ジョブ、タスク、および役割の割り当てに関連し、それらが成功し、適切に実行されることを保証することに関連していますか？",
    options: ["A.サービスレベル契約", "B.ガバナンス", "C.規制要件", "D.監査能力"],
    answer: "B",
    explanation: "Governance at its core is the idea of assigning jobs, takes, roles, and responsibilities and ensuring they are satisfactory performed."
  },
  {
    id: 31,
    question: "ビジネス継続性と災害復旧はどのセキュリティ概念に該当しますか？",
    options: ["A.守秘義務", "B.可用性", "C.フォールトトレランス", "D.完全性"],
    answer: "B",
    explanation: "Disaster recovery and business continuity are vital concerns with availability. If data is destroyed or compromised, having regular backup systems in place as well as being able to perform disaster recovery in the event of a major or widespread problem allows operations to continue with an acceptable loss of time and data to management. This also ensures that sensitive data is protected and persisted in the event of the loss or corruption of data systems or physical storage systems."
  },
  {
    id: 32,
    question: "動的アプリケーションセキュリティテスト（DAST）は通常、________形式のテストと見なされます。",
    options: ["A.乾いた畑", "B.ブラックボックス", "C.グレーボックス", "D.ホワイトボックス"],
    answer: "B",
    explanation: ""
  },
  {
    id: 33,
    question: "TLSは、________通信に________を提供します。",
    options: ["A.プライバシー、セキュリティ", "B.セキュリティ、最適化", "C.プライバシー、完全性", "D.強化、プライバシー"],
    answer: "C",
    explanation: ""
  },
  {
    id: 34,
    question: "SOCタイプ2レポートは5つの原則に分かれています。 他の4つの原則のいずれかを監査する場合、5つの原則のうちどれを含める必要がありますか ？",
    options: ["A.守秘義務", "B.プライバシー", "C.セキュリティ", "D.可用性"],
    answer: "C",
    explanation: "Under the SOC guidelines, when any of the four principles other than security are being audited, which includes availability, confidentiality, processing integrity, and privacy, the security principle must also be included with the audit."
  },
  {
    id: 35,
    question: "Cloud Security Alliance Cloud Controls Matrix（CCM）とは何ですか？",
    options: ["A.クラウドサービスプロバイダーのソフトウェア開発ライフサイクル要件のセット", "B.セキュリティドメインの階層に配置されたクラウドサービスセキュリティコントロールの一覧", "C.個別のセキュリティドメインに配置されたクラウドサービスセキュリティコントロールの一覧", "D.クラウドサービスプロバイダーの一連 de 規制要件"],
    answer: "C",
    explanation: "The CSA CCM is an inventory of cloud service security controls that are arranged into separate security domains, not a hierarchy."
  },
  {
    id: 36,
    question: "SOCI / SOCII / SOCIIIとは何ですか？",
    options: ["A.リスク管理フレームワーク", "B.アクセス制御", "C.監査レポート", "D.ソフトウェア開発フェーズ"],
    answer: "C",
    explanation: ""
  },
  {
    id: 37,
    question: "仮想化ネットワークのこれらの特性のうち、クラウド環境にリスクを追加するのはどれですか？",
    options: ["A.冗長性", "B.スケーラビリティ", "C.従量制", "D.セルフサービス"],
    answer: "A",
    explanation: ""
  },
  {
    id: 38,
    question: "ビジネス要件を収集することは、以下を除いて、組織の資産に関するこのすべての情報を決定する際に組織を支援することができます。",
    options: ["A.完全な在庫", "B.重要度", "C.値", "D.有用性"],
    answer: "D",
    explanation: "When we gather information about business requirements, we need to do a complete inventory, receive accurate valuation of assets (usually from the owners of those assets), and assess criticality; this collection of information does not tell us, objectively, how useful an asset is, however."
  },
  {
    id: 39,
    question: "PIIを扱う場合、データを適切に保護し、コンプライアンス要件に対応しなかった場合の法的 制裁または罰則を課す可能性のある要件に関連するカテゴリはどれですか。",
    options: ["A.契約", "B.管轄", "C.規制", "D.リーガル"],
    answer: "C",
    explanation: "Regulated PII pertains to data that is outlined in law and regulations. Violations of the requirements for the protection of regulated PII can carry legal sanctions or penalties. Contractual PII involves required data protection that is determined by the actual service contract between the cloud provider and cloud customer, rather than outlined by law. Violations of the provisions of contractual PII carry potential financial or contractual implications, but not legal sanctions. Legal and jurisdictional are similar terms to regulated, but neither is the official term used."
  },
  {
    id: 40,
    question: "DNSSECは、DNSプロトコルにセキュリティの層を追加するように設計されました。 DNSSEC拡張が軽減するように設計された攻撃の種類は何ですか？",
    options: ["A.アカウント乗っ取り", "B.スヌーピング", "C.なりすまし", "D.データ漏洩"],
    answer: "C",
    explanation: "DNSSECはDNSクエリ結果のデジタル署名を利用する拡張機能であり、信頼できるソースからのものであることを検証できます。これにより、不正なDNSサーバーによるなりすまし（スプーフィング）を防ぎ、ユーザーが悪意のあるサイトに誘導されるのを防ぎます [cite: 58, 59]。"
  },
  {
    id: 41,
    question: "トランスポート層セキュリティ（TLS）プロトコルは、パブリックメディア（インターネットなど）を介して安全な通信チャネルを作成します。典型的なTLSセッションでは、当事者間の信頼を確立するための通常の手段は何ですか？",
    options: ["A.帯域外認証", "B.多要素認証", "C.PKI証明書", "D.お互いの既存の知識"],
    answer: "C"
  },
  {
    id: 42,
    question: "単一のエンティティの識別が不可能になるように、機密データを取得し、各データオブジェクトから間接識別子を削除するプロセスはどのようなものですか。",
    options: ["A.トークン化", "B.暗号化", "C.匿名化", "D.マスキング"],
    answer: "C",
    explanation: "匿名化はマスキングの一種であり、データセットから間接的な識別子を削除して、個人との紐付けを防ぐプロセスです [cite: 63]。"
  },
  {
    id: 44,
    question: "同じクラウドでホストされている別の顧客に対するサービス拒否（DoS）攻撃からクラウドの顧客を保護するのに役立つのは次のどれですか？",
    options: ["A.予約", "B.測定サービス", "C.制限", "D.シェア"],
    answer: "A",
    explanation: "予約（Reservations）は、クラウドカスタマーがサービスを開始・運用するために最低限必要なリソースレベルを常に確保する仕組みです。他の顧客が攻撃を受けても、自社のリソースは保証されます [cite: 68, 69]。"
  },
  {
    id: 45,
    question: "次のうちどれが、単一の顧客、仮想マシン、またはアプリケーションがクラウド環境内で消費できるリソースの最大量の制御を表しますか？",
    options: ["A.共有", "B.予約", "C.プロビジョニング", "D.制限"],
    answer: "D",
    explanation: "制限（Limits）は、使用可能なメモリや処理能力の最大値を設定するものです。これにより、単一のホストや顧客が膨大なリソースを占有し、他の顧客に悪影響を及ぼすのを防ぎます [cite: 70, 71]。"
  },
  {
    id: 46,
    question: "組織のデータ検出のための新しいプロセスを開発しており、該当するすべてのデータが含まれていることを確認する責任があります。次のうち、データ検出の3つの方法の1つではないものはどれですか？",
    options: ["A.メタデータ", "B.内容分析", "C.ラベル", "D.分類"],
    answer: "D"
  },
  {
    id: 47,
    question: "ライトウェイトディレクトリアクセスプロトコル（LDAP）環境では、ディレクトリサーバーの各エントリは___________によって識別されます。",
    options: ["A.ドメイン名（DN）", "B.識別名（DN）", "C.ディレクトリ名（DN）", "D.デフォルト名（DN）"],
    answer: "B"
  },
  {
    id: 48,
    question: "APIを使用すると、スケーラビリティ、信頼性、およびセキュリティにさまざまな機能と最適化が強く求められます。 SOAP APIがサポートしていないREST APIは何をサポートしていますか？",
    options: ["A.加速", "B.キャッシュ", "C.冗長性", "D.暗号化"],
    answer: "B",
    explanation: "SOAPはキャッシュをサポートしていませんが、REST APIはキャッシュをサポートしています [cite: 72]。"
  },
  {
    id: 49,
    question: "次の脅威の種類のうち、最初のチェック後に自身の一部の承認を検証しないアプリケーションが関係するものはどれですか。",
    options: ["A.注射", "B.関数レベルのアクセス制御がありません", "C.クロスサイトリクエストフォージェリ", "D.クロスサイトスクリプティング"],
    answer: "B",
    explanation: "アプリケーションの各機能にアクセスするたびにチェックを行わないと、攻撃者が権限のない部分にアクセスするためのリクエストを偽造できてしまいます [cite: 74, 75]。"
  },
  {
    id: 50,
    question: "PaaSの主要な機能または特徴は何ですか？",
    options: ["A.同種環境のサポート", "B.単一のプログラミング言語のサポート", "C.ロックインを削減する機能", "D.手動でスケーリングする機能"],
    answer: "C",
    explanation: "PaaSは複数のプログラミング言語やフレームワークをサポートすべきであり、オープンソーススタックの利用により、プロバイダー変更時のロックインを減らすことができます [cite: 76, 77]。"
  },
  {
    id: 51,
    question: "以下のそれぞれは、_____________を除いて、IDおよびアクセス管理（IAM）プロセスの識別フェーズの要素です。",
    options: ["A.プロビジョニング", "B.反転", "C.管理", "D.プロビジョニング解除"],
    answer: "B"
  },
  {
    id: 52,
    question: "次のテクノロジのうち、オペレーティングシステムのセキュリティ依存性を必要としないのは、それ自体以外のどれですか？",
    options: ["A.管理面", "B.タイプ1ハイパーバイザー", "C.タイプ2ハイパーバイザー", "D.仮想マシン"],
    answer: "B"
  },
  {
    id: 53,
    question: "リソース使用率の制限をクラウド環境内のさまざまなレベルに設定して、特定のエンティティーが他のクラウド顧客に影響を与えるレベルのリソースを消費できないようにすることができます。 制限の対象とならないユニットは次のうちどれですか？",
    options: ["A.ハイパーバイザー", "B.クラウドのお客様", "C.仮想マシン", "D.サービス"],
    answer: "A",
    explanation: "制限はサービス、仮想マシン、クラウドカスタマーのレベルで適用できますが、インフラ側のコンポーネントであるハイパーバイザーレベルは制限適用のユニットではありません [cite: 79, 80]。"
  },
  {
    id: 54,
    question: "どのタイプのWebアプリケーション監視が実際のアクティビティを最も厳密に測定しますか？",
    options: ["A.総合的なパフォーマンスモニタリング", "B.リアルユーザーモニタリング（RUM）", "C.セキュリティ情報およびイベント管理（SIEM）", "D.データベースアプリケーションモニター（DAM）"],
    answer: "B"
  },
  {
    id: 55,
    question: "SOC 2レポートには常にどのような原則を含める必要がありますか？",
    options: ["A.守秘義務", "B.セキュリティ", "C.プライバシー", "D.処理の整合性"],
    answer: "B"
  },
  {
    id: 56,
    question: "____________を行うには、定期的に環境を調査することを含め、現在の資産インベントリリストを維持することが重要です。",
    options: ["A.パッチが適用されていない不明なアセットが環境へのバックドアとして使用されるのを防ぎます", "B.紛失したデバイスが自動的に取得システムに入力され、再購入と交換が行われるようにします", "C.デバイスを適切にカタログ化し、注釈を付けることで、ユーザーのモラルを維持します", "D.すべてのデバイスの請求が適切な部門によって処理されていることを確認します"],
    answer: "A"
  },
  {
    id: 57,
    question: "ユーザーがシステムにアクセスするとき、どのプロセスが、ユーザーがアプリケーション内で付与される役割と特権を決定しますか？",
    options: ["A.承認", "B.認証", "C.プロビジョニング", "D.特権"],
    answer: "A"
  },
  {
    id: 58,
    question: "STRIDE脅威モデルを構成する6つのコンポーネントは何ですか？",
    options: ["A.なりすまし、改ざん、否認、情報開示、サービス拒否、および特権の昇格", "B.なりすまし、改ざん、否認防止、情報開示、サービス拒否、および特権の昇格", "C.なりすまし、改ざん、否認、情報開示、分散型サービス拒否、および特権の昇格", "D.なりすまし、改ざん、否認、情報開示、サービス拒否、およびソーシャルエンジニアリング"],
    answer: "A"
  },
  {
    id: 59,
    question: "あなたは、クラウドで本番環境を運用している会社で働いています。同じクラウドプロバイダーを使用している別の会社が、法執行機関によるゆすりの調査中です。 ____________のクラウド特性のため、会社はこれについて心配する必要があります。",
    options: ["A.仮想化", "B.プールされたリソース", "C.弾力性", "D.自動化されたセルフサービス"],
    answer: "B"
  },
  {
    id: 60,
    question: "否認防止とはどういう意味ですか？",
    options: ["A.特定の当事者のプライベートな会話の禁止", "B.結果を保存する前にトランザクションが完了していることを確認します", "C.機能の実行中に誰かが監査機能をオフにできないようにする", "D.トランザクションに参加する当事者が、トランザクションに参加しなかったと主張するのを防ぎます"],
    answer: "D"
  },
  {
    id: 61,
    question: "クラウドのお客様に最も簡単な初期設定とアクセスを提供するクラウド導入モデルはどれですか？",
    options: ["A.ハイブリッド", "B.コミュニティ", "C.プライベート", "D.公開"],
    answer: "D",
    explanation: "パブリッククラウド（公開）モデルは誰でも利用可能で、多くの場合、ウェブポータル経由でアカウントを作成しクレジットカード情報を登録するだけで利用開始できます [cite: 82, 83]。"
  },
  {
    id: 62,
    question: "あなたは、オンプレミスのレガシー環境からクラウドへの移行を検討している組織のセキュリティポリシーリーダーです。組織のツールとして、クラウドセキュリティアライアンスのクラウドコントロールマトリックス（CSA CCM）を確認しています。 CSA CCMが組織に提供するメリットは次のうちどれですか？",
    options: ["A.規制コンプライアンスの簡素化", "B.ログファイルから複数のデータストリームを収集する", "C.ベースライン構成がすべてのシステムに適用されていることを確認します", "D.組織とクラウドプロバイダー間の契約条件の施行"],
    answer: "A"
  },
  {
    id: 63,
    question: "IDおよびアクセス管理（IAM）は、次のうちどれを保証するセキュリティ分野ですか？",
    options: ["A.すべてのユーザーが適切に承認されている", "B.適切な個人が適切な理由で適切なタイミングで適切なリソースにアクセスできること。", "C.すべてのユーザーが適切に認証されている", "D.権限のないユーザーが適切な理由で適切なタイミングで適切なリソースにアクセスできるようにする"],
    answer: "B"
  },
  {
    id: 64,
    question: "アリスはソフトウェア会社のCEOです。彼女は、現在のオンプレミスのレガシー環境からクラウドへの運用の移行を検討しています。 アリスは、会社の知的財産を保護するために、__________________を除くこれらすべての手法/ソリューションの実装を検討することをお勧めします。",
    options: ["A.出力監視", "B.暗号化", "C.回転式改札口", "D.電子透かし"],
    answer: "C"
  },
  {
    id: 65,
    question: "物理状態を重ね合わせて計算能力と暗号化キースペースの両方を増やすことができる理論技術はどれですか？",
    options: ["A.リードソロモン（AONT-RS）によるオールオアナッシングトランスフォーム", "B.量子コンピューティング", "C.フィリグリー投資", "D.シャーディング"],
    answer: "B"
  },
  {
    id: 66,
    question: "どのクラウドストレージタイプが仮想ハードドライブに似ており、同じ方法で同じタイプの機能を使用して利用できますか？",
    options: ["A.ボリューム", "B.非構造化", "C.構造化", "D.オブジェクト"],
    answer: "A",
    explanation: "ボリュームストレージは、IaaS環境で仮想ハードドライブとして割り当て・マウントされ、従来のファイルシステムと同じように管理・利用できます [cite: 84, 85]。"
  },
  {
    id: 67,
    question: "最初に復号化せずに暗号化されたデータを処理する可能性につながる可能性のある実験技術は何ですか？",
    options: ["A.AES", "B.リンク暗号化", "C.準同型暗号化", "D.ワンタイムパッド"],
    answer: "C"
  },
  {
    id: 68,
    question: "STRIDE脅威モデルでの「T」の概念は何ですか？",
    options: ["A.TLS", "B.Testing", "C.Tampering with data (データの改ざん)", "D.Transport"],
    answer: "C",
    explanation: "ユーザーにデータを送信するアプリケーションは、クッキーやGET/POSTコマンド、ヘッダーなどのデータが改ざんされるリスクに直面します。受信データの検証が極めて重要です [cite: 86, 87, 88]。"
  },
  {
    id: 69,
    question: "特定のブランドの仮想化ツールセットを展開する前に、____________に従って構成することが重要です。",
    options: ["A.業界標準", "B.その管轄区域の現行法", "C.ベンダーガイダンス", "D.専門家の意見"],
    answer: "C"
  },
  {
    id: 70,
    question: "「I」はSTRIDE脅威モデルでどのような概念を表していますか？",
    options: ["A.完全性", "B.情報開示", "C.ITセキュリティ", "D.インサイダーの脅威"],
    answer: "B",
    explanation: "STRIDEの「I」はInformation Disclosure（情報開示）を指します。個人情報や機密情報がアプリケーションによって漏洩することは、ユーザーにとって最大の懸念事項の一つです [cite: 89, 90]。"
  },
  {
    id: 71,
    question: "クラウド環境で最も一般的に使用されるAPIは次のうちどれですか。",
    options: ["A.RESTとSAML", "B.SOAPおよびREST", "C.RESTおよびXML", "D.XMLおよびSAML"],
    answer: "B",
    explanation: "SOAPとRESTはクラウド環境で最も広く使用されているAPIです [cite: 92]。"
  },
  {
    id: 72,
    question: "消磁がクラウドでの安全なサニタイズの効果的な手段ではない理由は何ですか？",
    options: ["A.クラウド内のすべてのデータストレージスペースはすでに測定されています。", "B.クラウドデータストレージは消磁の影響を受けない場合があります。", "C.連邦法は米国でそれを禁止しています。", "D.爆風半径が広すぎます。"],
    answer: "B"
  },
  {
    id: 73,
    question: "次のデータサニテーションアプローチのうち、クラウド環境内で常に利用できるのはどれですか？",
    options: ["A.物理的破壊", "B.シュレッダー", "C.上書き", "D.暗号化による消去"],
    answer: "D"
  },
  {
    id: 74,
    question: "複数の管轄区域間の対立を解決して全体的な方針を形成する上での主な障害は何ですか？",
    options: ["A.言語の違い", "B.使用されているテクノロジー", "C.ライセンスの問題", "D.国際的な権威の欠如"],
    answer: "D"
  },
  {
    id: 75,
    question: "データの信頼性に焦点を当てたセキュリティコンセプトはどれですか。",
    options: ["A.完全性", "B.可用性", "C.否認防止", "D.守秘義務"],
    answer: "A",
    explanation: "完全性（Integrity）はデータの信頼性、および未承認の変更や改ざんの防止に焦点を当てています [cite: 94]。"
  },
  {
    id: 76,
    question: "次のうち、STRIDEモデルのコンポーネ攻撃ではないものはどれですか？",
    options: ["A.なりすまし", "B.否認", "C.情報開示", "D.外部ペンテスト"],
    answer: "D"
  },
  {
    id: 77,
    question: "クラウドデータセンターを設計する場合、緊急時の運用中に運用の継続性を確保するために必要でない側面は次のうちどれですか？",
    options: ["A.きれいな水へのアクセス", "B.ブロードバンドデータ接続", "C.拡張バッテリーバックアップ", "D.データセンターへの物理的アクセス"],
    answer: "C"
  },
  {
    id: 78,
    question: "クラウド環境のどのネットワークコンセプトで、ネットワークの分離とIPスペースの分離が可能ですか？",
    options: ["A.計画", "B.WAN", "C.LAN", "D.VLAN"],
    answer: "D",
    explanation: "VLAN（仮想エリアネットワーク）は、ネットワークとIPスペースを論理的に分離・隔離し、セキュリティと制御を強化します [cite: 96]。"
  },
  {
    id: 79,
    question: "__________に対する監査は、組織が全体的で包括的なセキュリティプログラムを持っていることを示します。",
    options: ["A.SAS70標準", "B.SSAE16標準", "C.SOC 2、タイプ2レポートマトリックス", "D.ISO27001認証要件"],
    answer: "D"
  },
  {
    id: 80,
    question: "クラウドコンピューティングの定義に関連する米国国立標準技術研究所（NIST）の出版物はどれですか？",
    options: ["A.SP 800-153", "B.SP 800-145", "C.SP 800-53", "D.SP 800-40"],
    answer: "B",
    explanation: "NIST SP 800-145は「NISTによるクラウドコンピューティングの定義」というタイトルで、主要な概念とコンポーネントが定義されています [cite: 97]。"
  },
  {
    id: 81,
    question: "すべてのシステムまたはシステムのクラスに適用される一連の構成とポリシーの適用に関連する概念はどれですか。",
    options: ["A.硬化", "B.レベリング", "C.ベースライン", "D.標準"],
    answer: "C",
    explanation: "ベースラインは、新しいシステムやサービスに適用される一連の設定・ポリシーであり、他のサービスをデプロイする際の基礎となります [cite: 98]。"
  },
  {
    id: 82,
    question: "フェデレーションIDシステム内で情報交換に最も一般的に使用される標準はどれですか？",
    options: ["A.OAuth", "B.OpenID", "C.SAML", "D.WS-フェデレーション"],
    answer: "C"
  },
  {
    id: 83,
    question: "次のうち、より機密性の高いデータまたは専門データの規制フレームワークではないものはどれですか。",
    options: ["A.FIPS 140-2", "B.FedRAMP", "C.PCI DSS", "D.HIPAA"],
    answer: "A",
    explanation: "FIPS 140-2は暗号化モジュールの認定に関する規格であり、規制フレームワーク（規制の枠組み）ではありません [cite: 101]。"
  },
  {
    id: 84,
    question: "以下のすべては、____________を除いて、通常は非機能要件です。",
    options: ["A.色", "B.音", "C.セキュリティ", "D.機能"],
    answer: "D"
  },
  {
    id: 85,
    question: "次のレポートのどれが財務管理監査と最も整合していますか？",
    options: ["A.SSAE 16", "B.SOC 2", "C.SOC 1", "D.SOC 3"],
    answer: "C",
    explanation: "SOC 1レポートは、主に財務サービスに関連するコントロールに焦点を当てています [cite: 103]。"
  },
  {
    id: 86,
    question: "Infrastructure as a Service (IaaS) ソリューションを使用する場合、顧客に提供される機能は何ですか？",
    options: [
      "A. コンシューマーがオペレーティングシステムやアプリケーションを含む任意のソフトウェアを展開および実行できない場合に、処理、ストレージ、ネットワーク、およびその他の基本的なコンピューティングリソースをプロビジョニングするため",
      "B. プロバイダーがオペレーティングシステムやアプリケーションを含む任意のソフトウェアを展開および実行できる場合に、処理、ストレージ、ネットワーク、およびその他の基本的なコンピューティングリソースをプロビジョニングするため",
      "C. 顧客がオペレーティングシステムやアプリケーションを含む任意のソフトウェアを展開および実行できる場合に、処理、ストレージ、ネットワーク、およびその他の基本的なコンピューティングリソースをプロビジョニングするため",
      "D. 開発者がソースコードを管理することなくアプリケーションを実行できるようにするため"
    ],
    answer: "C",
    explanation: "IaaSでは、消費者はオペレーティングシステムやアプリケーションを含む任意のソフトウェアを展開・実行できる、処理、ストレージ、ネットワーク、およびその他の基本的なコンピューティングリソースをプロビジョニングする能力が提供されます [cite: 105]。"
  },
  {
    id: 87,
    question: "STRIDE脅威モデルの各文字は、特定の脅威カテゴリを表します。'R'は何を表しますか？",
    options: ["A. 冗長性 (Redundancy)", "B. 否認 (Repudiation)", "C. 回復 (Recovery)", "D. 登録 (Registration)"],
    answer: "B",
    explanation: "STRIDEの'R'は、トランザクションやアクションの発生を否定しようとする「否認 (Repudiation)」を表します [cite: 106]。"
  },
  {
    id: 88,
    question: "クラウド共有責任モデルにおいて、Platform as a Service (PaaS) モデルで顧客が責任を負うのは次のうちどれですか？",
    options: ["A. 物理ホスト", "B. ネットワーク構成", "C. アプリケーションデータ", "D. ハイパーバイザー"],
    answer: "C",
    explanation: "PaaSモデルにおいて、基盤となるインフラやプラットフォームの管理はプロバイダーの責任ですが、その上で動作するアプリケーションのデータや設定については顧客が責任を負います [cite: 107]。"
  },
  {
    id: 89,
    question: "監査の文脈において、データの機密性を維持するために、機密情報を読み取れない形式に変換するプロセスはどれですか？",
    options: ["A. 難読化", "B. 暗号化", "C. 匿名化", "D. トークン化"],
    answer: "B",
    explanation: "暗号化は、鍵を使用してデータを読み取れない形式に変換し、データの機密性を保護するプロセスです [cite: 108]。"
  },
  {
    id: 90,
    question: "法執行機関がクラウドプロバイダーから特定の顧客のデータを押収しようとする場合、他の顧客のデータに影響を与えるリスクがあるのはクラウドのどの特性によりますか？",
    options: ["A. リソースのプーリング", "B. 測定サービス", "C. オンデマンド・セルフサービス", "D. 広範なネットワークアクセス"],
    answer: "A",
    explanation: "マルチテナンシー環境（リソースプーリング）では、複数の顧客のデータが物理的に同じリソースに存在する可能性があるため、物理的な押収などが他の顧客に影響を及ぼすリスクがあります [cite: 109]。"
  },
  {
    id: 91,
    question: "CSA Cloud Controls Matrix (CCM) の主な目的は何ですか？",
    options: ["A. 脆弱性スキャンツールの提供", "B. セキュリティ管理策の共通基準の提供", "C. 物理データセンターの設計図の提供", "D. 暗号化アルゴリズムの策定"],
    answer: "B",
    explanation: "CSA CCMは、クラウド業界で一般的に受け入れられているセキュリティ管理策のフレームワークを提供し、複雑なセキュリティ評価を簡素化することを目的としています [cite: 110]。"
  },
  {
    id: 92,
    question: "クラウドプロバイダーが第三者による監査を受け、その結果を要約して一般に公開するレポートはどれですか？",
    options: ["A. SOC 1", "B. SOC 2 Type II", "C. SOC 3", "D. SSAE 16"],
    answer: "C",
    explanation: "SOC 3レポートは、SOC 2の機密情報を含まない要約版であり、一般公開やマーケティング目的で使用されます [cite: 111]。"
  },
  {
    id: 93,
    question: "データ侵害が発生した際に、どの規制が適用されるかを決定する主な要因は何ですか？",
    options: ["A. 使用されている暗号化の種類", "B. データの保存場所とデータ主体の居住地", "C. クラウドプロバイダーの時価総額", "D. 侵害されたデータのファイル形式"],
    answer: "B",
    explanation: "データの物理的な保存場所（管轄区域）や、影響を受ける個人の居住地の規制が適用されることになります [cite: 112]。"
  },
  {
    id: 94,
    question: "ソフトウェア開発ライフサイクル (SDLC) において、設計フェーズで実施されるべきセキュリティ活動はどれですか？",
    options: ["A. コード署名", "B. 脅威モデリング", "C. ペネトレーションテスト", "D. インシデント対応"],
    answer: "B",
    explanation: "設計フェーズでは、システムに潜む潜在的な脅威を特定するために脅威モデリングを実施することが不可欠です [cite: 113]。"
  },
  {
    id: 95,
    question: "保管中のデータ (Data at Rest) を保護するための最も一般的な技術はどれですか？",
    options: ["A. TLS", "B. IPsec", "C. 暗号化", "D. デジタル署名"],
    answer: "C",
    explanation: "ストレージに保存されているデータ（Data at Rest）の保護には、ディスク暗号化やファイル暗号化が主に使用されます [cite: 114]。"
  },
  {
    id: 96,
    question: "ネットワーク経由で送信中のデータ (Data in Transit) を保護するために広く使われているプロトコルはどれですか？",
    options: ["A. AES", "B. TLS", "C. SHA-256", "D. RSA"],
    answer: "B",
    explanation: "送信中のデータ保護には、TLS (Transport Layer Security) などの通信プロトコルが使用されます [cite: 115]。"
  },
  {
    id: 97,
    question: "データの整合性を確認するために使用される、可変長のデータを固定長のユニークな値に変換する技術はどれですか？",
    options: ["A. 対称暗号", "B. ハッシュ関数", "C. 難読化", "D. 符号化"],
    answer: "B",
    explanation: "ハッシュ関数は、データの整合性を検証するための「デジタル指紋」として機能する値を生成します [cite: 116]。"
  },
  {
    id: 98,
    question: "クラウド環境において、特定の論理ネットワーク内でのみトラフィックを許可する技術はどれですか？",
    options: ["A. SDN", "B. VLAN", "C. VPN", "D. IDS"],
    answer: "B",
    explanation: "VLAN (Virtual Local Area Network) を使用することで、論理的にネットワークを分離し、セグメント間のアクセス制御を行うことができます [cite: 117]。"
  },
  {
    id: 99,
    question: "フェデレーション環境において、ユーザーの属性情報を交換するために一般的に使用される XML ベースの標準はどれですか？",
    options: ["A. OAuth", "B. SAML", "C. OpenID", "D. JSON"],
    answer: "B",
    explanation: "SAML (Security Assertion Markup Language) は、認証および認可情報を交換するための標準的なプロトコルです [cite: 118]。"
  },
  {
    id: 100,
    question: "情報資産の重要度を判断するために、資産が失われた場合の影響を分析するプロセスはどれですか？",
    options: ["A. リスク回避", "B. ビジネス影響分析 (BIA)", "C. 脆弱性診断", "D. ギャップ分析"],
    answer: "B",
    explanation: "BIA (Business Impact Analysis) は、業務中断が組織に与える影響を評価し、復旧の優先順位を決定するために行われます [cite: 119]。"
  },
  {
    id: 101,
    question: "特定のシステム構成が承認された「正常な状態」として設定され、その後の変更の基準となるものはどれですか？",
    options: ["A. ベースライン", "B. ポリシー", "C. ガイドライン", "D. 手順書"],
    answer: "A",
    explanation: "ベースラインは、システムの標準的なセキュリティ設定や構成を示す基準点となります [cite: 120]。"
  },
  {
    id: 102,
    question: "クラウド上の仮想マシンを他のクラウドプロバイダーへ容易に移行できる能力を何と呼びますか？",
    options: ["A. 弾力性", "B. 移植性 (Portability)", "C. 可用性", "D. スケーラビリティ"],
    answer: "B",
    explanation: "移植性とは、データやアプリケーションを異なるクラウド環境やプロバイダー間で移動させる際の容易さを指します [cite: 121]。"
  },
  {
    id: 103,
    question: "特定のサービスやアプリケーションに対して割り当てるリソースの「最小量」を保証する設定を何と呼びますか？",
    options: ["A. 制限 (Limit)", "B. 予約 (Reservation)", "C. 共有 (Share)", "D. クォータ"],
    answer: "B",
    explanation: "予約 (Reservation) は、対象となるサービスが動作するために必要なリソースが常に確保されることを保証します [cite: 122]。"
  },
  {
    id: 104,
    question: "物理的な破壊を行わずに、データを読み取り不能にすることで実質的に削除したとみなす手法はどれですか？",
    options: ["A. 暗号化消去 (Crypto-shredding)", "B. 消磁", "C. 上書き", "D. フォーマット"],
    answer: "A",
    explanation: "暗号化消去は、データの暗号化鍵を破棄することで、データを二度と復元できないようにする効率的な削除手法です [cite: 123]。"
  },
  {
    id: 105,
    question: "個人を特定できる情報 (PII) を保護するために、データセットから直接的な識別子を削除する手法はどれですか？",
    options: ["A. 難読化", "B. マスキング", "C. 匿名化", "D. 暗号化"],
    answer: "C",
    explanation: "匿名化は、データセットから個人を特定できる情報を削除または変更し、特定の個人を識別できないようにするプロセスです [cite: 124]。"
  },
  {
    id: 106,
    question: "ソフトウェアの欠陥を特定するために、ソースコードを実際に実行せずに解析する手法はどれですか？",
    options: ["A. DAST", "B. SAST", "C. RUM", "D. SIEM"],
    answer: "B",
    explanation: "SAST (Static Application Security Testing) は、実行前のソースコードやバイナリをスキャンして脆弱性を探します [cite: 125]。"
  },
  {
    id: 107,
    question: "クラウドプロバイダーの財務報告に関連するコントロールを監査対象とするレポートはどれですか？",
    options: ["A. SOC 1", "B. SOC 2", "C. SOC 3", "D. ISO 27001"],
    answer: "A",
    explanation: "SOC 1レポートは、委託会社の財務報告に対する内部統制を評価することに焦点を当てています [cite: 126]。"
  },
  {
    id: 108,
    question: "データセンターにおいて、火災発生時に酸素濃度を下げて消火を行うシステムはどれですか？",
    options: ["A. スプリンクラー", "B. ガス消火システム", "C. 乾式パイプ", "D. 化学消火器"],
    answer: "B",
    explanation: "ガス消火システムは、ハロンや不活性ガスを使用して火災を鎮圧し、IT機器へのダメージを最小限に抑えます [cite: 127]。"
  },
  {
    id: 109,
    question: "ITリソースの使用量をリアルタイムで監視し、実際の使用分のみを課金するモデルを何と呼びますか？",
    options: ["A. 定額制", "B. 測定サービス (Measured Service)", "C. 一括払い", "D. オンデマンド"],
    answer: "B",
    explanation: "測定サービスは、使用量に応じた課金を可能にし、リソースの透明性を確保します [cite: 128]。"
  },
  {
    id: 110,
    question: "ある特定のコミュニティや組織群が共通の目的（セキュリティ要件やミッションなど）のために共有するクラウドモデルはどれですか？",
    options: ["A. パブリッククラウド", "B. プライベートクラウド", "C. コミュニティクラウド", "D. ハイブリッドクラウド"],
    answer: "C",
    explanation: "コミュニティクラウドは、特定の関心事を持つ複数の組織によって共有・管理される環境です [cite: 129]。"
  },
  {
    id: 111,
    question: "外部の人間が組織のシステムに侵入を試み、セキュリティの弱点を見つけ出すテストを何と呼びますか？",
    options: ["A. 監査", "B. ペネトレーションテスト", "C. 脆弱性スキャン", "D. コンプライアンスチェック"],
    answer: "B",
    explanation: "ペネトレーションテストは、攻撃者の手法を模倣して防御能力を評価する実戦的なテストです [cite: 130]。"
  },
  {
    id: 112,
    question: "情報の所有者が、誰がその情報にアクセスできるかを決定するアクセス制御モデルはどれですか？",
    options: ["A. 任意アクセス制御 (DAC)", "B. 強制アクセス制御 (MAC)", "C. ロールベースアクセス制御 (RBAC)", "D. 属性ベースアクセス制御 (ABAC)"],
    answer: "A",
    explanation: "DACでは、オブジェクトの所有者がその裁量で他のユーザーに権限を付与することができます [cite: 131]。"
  },
  {
    id: 113,
    question: "STRIDEモデルにおいて、正規のユーザーになりすましてシステムにアクセスすることを何と呼びますか？",
    options: ["A. 改ざん", "B. 情報漏洩", "C. なりすまし (Spoofing)", "D. 特権昇格"],
    answer: "C",
    explanation: "なりすましは、他人のIDや認証情報を使用して不正にシステムを利用する行為です [cite: 132]。"
  },
  {
    id: 114,
    question: "クラウド環境において、アプリケーション開発者がOSやミドルウェアを意識せずにコードをデプロイできるサービスモデルはどれですか？",
    options: ["A. IaaS", "B. PaaS", "C. SaaS", "D. DaaS"],
    answer: "B",
    explanation: "PaaS (Platform as a Service) は、アプリケーションの開発・実行に必要なプラットフォーム一式を提供します [cite: 133]。"
  },
  {
    id: 115,
    question: "データ侵害が発生した際、影響を受ける個人や規制当局に通知するプロセスを何と呼びますか？",
    options: ["A. インシデント封じ込め", "B. 侵害通知 (Breach Notification)", "C. フォレンジック調査", "D. リスク受容"],
    answer: "B",
    explanation: "多くの法域では、個人情報の漏洩が発生した際に一定期間内に通知を行うことが法律で義務付けられています [cite: 134]。"
  },
  {
    id: 116,
    question: "使用中のデータ (Data in Use) を保護するために有効な技術は次のうちどれですか？",
    options: ["A. ディスク暗号化", "B. 通信の暗号化 (TLS)", "C. デジタル署名 / 信頼できる実行環境 (TEE)", "D. バックアップ"],
    answer: "C",
    explanation: "使用中のデータはメモリ上で処理されるため、TEE (Trusted Execution Environment) などの特殊なハードウェア保護技術が必要です [cite: 135]。"
  },
  {
    id: 117,
    question: "医療記録とプライバシーに関連するデータに焦点を当てている米国の法律はどれですか？",
    options: ["A. セーフハーバー", "B. SOX", "C. GLBA", "D. HIPAA"],
    answer: "D",
    explanation: "HIPAA (Health Insurance Portability and Accountability Act) は、米国の医療情報の機密性とセキュリティを保護するための法律です [cite: 136]。"
  },
  {
    id: 118,
    question: "PaaSに関連付けられているストレージタイプは次のうちどれですか？",
    options: ["A. 構造化された自由形式", "B. ボリュームとオブジェクト", "C. 構造化および非構造化", "D. データベースとファイルシステム"],
    answer: "C",
    explanation: "PaaSでは、アプリケーションの用途に応じて、データベースのような構造化データや、ファイルのような非構造化データの両方のストレージタイプが利用されます [cite: 137]。"
  },
  {
    id: 119,
    question: "攻撃者の戦術を学ぶために、偽の本番システムを使用して攻撃者を誘惑する戦略はどれですか？",
    options: ["A. ファイアウォール", "B. ハニーポット", "C. サンドボックス", "D. ロードバランサ"],
    answer: "B",
    explanation: "ハニーポットは、攻撃者をおびき寄せるための囮のシステムであり、攻撃手法の分析や早期検知に使用されます [cite: 138]。"
  },
  {
    id: 120,
    question: "BCDR（ビジネス継続性と災害復旧）プランの有効性を検証するために行われる、机上でのシミュレーションを何と呼びますか？",
    options: ["A. フルスケールテスト", "B. 並行テスト", "C. テーブルトップテスト (Tabletop Exercise)", "D. カットオーバー"],
    answer: "C",
    explanation: "テーブルトップテストは、関係者が集まり、シナリオに基づいて対応手順を確認する低コストで効果的な検証方法です [cite: 139]。"
  }
];