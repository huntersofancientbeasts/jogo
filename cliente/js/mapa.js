export default class mapa extends Phaser.Scene {
  constructor () {
    super('mapa')
  }

  preload () {
    // lembrando que temos que carregar o som como primeiro de tudo, até acima do mapa, apartir do mesmo comando:
    // this.load.audio()

    // Sprites load

    this.load.tilemapTiledJSON('mapa', '/assets/mapa/Mapa.json')

    this.load.image('BlocosCenarioVerde', './assets/mapa/BlocosCenarioVerde.png')
    this.load.image('BlocosCenarioAmarelo', './assets/mapa/BlocosCenarioAmarelo.png')
    this.load.image('BlocosCenarioVermelho', './assets/mapa/BlocosCenarioVermelho.png')
    this.load.image('BlocosCenarioAzul', './assets/mapa/BlocosCenarioAzul.png')
    this.load.image('BlocosCenarioRoxo', './assets/mapa/BlocosCenarioRoxo.png')
    this.load.image('BlocosMorte', './assets/mapa/BlocosMorte.png')
    this.load.image('BlocosTeto', './assets/mapa/BlocosTeto.png')
    this.load.image('BlocosBordas', './assets/mapa/BlocosBordas.png')
    this.load.image('Gramas', './assets/mapa/Gramas.png')
    this.load.image('GramasAmarela', './assets/mapa/GramasAmarela.png')
    this.load.image('GramasAzul', './assets/mapa/GramasAzul.png')
    this.load.image('GramasVermelho', './assets/mapa/GramasVermelho.png')
    this.load.image('GramasRoxo', './assets/mapa/GramasRoxo.png')
    this.load.image('Pedrinhas', './assets/mapa/Pedrinhas.png')
    this.load.image('FundoCavernaAzul', './assets/mapa/FundoCavernaAzul.png')
    this.load.image('FundoCavernaRoxa', './assets/mapa/FundoCavernaRoxa.png')
    this.load.image('FundoCavernaVerde', './assets/mapa/FundoCavernaVerde.png')
    this.load.image('FundoCavernaVermelho', './assets/mapa/FundoCavernaVermelho.png')
    this.load.image('FundoCavernaAmarela', './assets/mapa/FundoCavernaAmarela.png')
    this.load.image('Vazio', './assets/mapa/Vazio.png')

    this.load.spritesheet('BenPlayer1', './assets/personagens/BenPlayer1.png', { frameWidth: 48, frameHeight: 48 })

    // Sprites Botões
    this.load.spritesheet('cima', './assets/Controles/SetaCima.png', { frameWidth: 128, frameHeight: 128 })
    this.load.spritesheet('esquerda', './assets/Controles/SetaEsq.png', { frameWidth: 128, frameHeight: 128 })
    this.load.spritesheet('direita', './assets/Controles/SetaDir.png', { frameWidth: 128, frameHeight: 128 })
    this.load.spritesheet('AtqEsp', './assets/Controles/AtqEsp.png', { frameWidth: 128, frameHeight: 128 })
    this.load.spritesheet('HabFaca', './assets/Controles/HabFaca.png', { frameWidth: 128, frameHeight: 128 })
    this.load.spritesheet('AtqMac', './assets/Controles/AtqMac.png', { frameWidth: 128, frameHeight: 128 })
    this.load.spritesheet('HabDef', './assets/Controles/HabDef.png', { frameWidth: 128, frameHeight: 128 })
  }

  create () {
    // adiciona o ponteiro de toque:
    this.input.addPointer(3)

    // som de fundo:
    // this.sound.add('musica mapa', {loop:true}).play()

    // cria o objeto tilemap (mapa)
    this.tilemapMapa = this.make.tilemap({ key: 'mapa' })

    // Tilesets
    this.tilesetBlocosBordas = this.tilemapMapa.addTilesetImage('BlocosBordas')
    this.tilesetBlocosCenarioVerde = this.tilemapMapa.addTilesetImage('BlocosCenarioVerde')
    this.tilesetBlocosCenarioAmarelo = this.tilemapMapa.addTilesetImage('BlocosCenarioAmarelo')
    this.tilesetBlocosCenarioVermelho = this.tilemapMapa.addTilesetImage('BlocosCenarioVermelho')
    this.tilesetBlocosCenarioAzul = this.tilemapMapa.addTilesetImage('BlocosCenarioAzul')
    this.tilesetBlocosCenarioRoxo = this.tilemapMapa.addTilesetImage('BlocosCenarioRoxo')
    this.tilesetBlocosMorte = this.tilemapMapa.addTilesetImage('BlocosMorte')
    this.tilesetBlocosTeto = this.tilemapMapa.addTilesetImage('BlocosTeto')
    this.tilesetFundoCavernaAzul = this.tilemapMapa.addTilesetImage('FundoCavernaAzul')
    this.tilesetFundoCavernaRoxa = this.tilemapMapa.addTilesetImage('FundoCavernaRoxa')
    this.tilesetFundoCavernaVerde = this.tilemapMapa.addTilesetImage('FundoCavernaVerde')
    this.tilesetFundoCavernaVermelho = this.tilemapMapa.addTilesetImage('FundoCavernaVermelho')
    this.tilesetFundoCavernaAmarela = this.tilemapMapa.addTilesetImage('FundoCavernaAmarela')
    this.tilesetGramas = this.tilemapMapa.addTilesetImage('Gramas')
    this.tilesetGramasAmarela = this.tilemapMapa.addTilesetImage('GramasAmarela')
    this.tilesetGramasAzul = this.tilemapMapa.addTilesetImage('GramasAzul')
    this.tilesetGramasVermelho = this.tilemapMapa.addTilesetImage('GramasVermelho')
    this.tilesetGramasRoxo = this.tilemapMapa.addTilesetImage('GramasRoxo')
    this.tilesetPedrinhas = this.tilemapMapa.addTilesetImage('Pedrinhas')

    // Layers
    this.layerFundo = this.tilemapMapa.createLayer('Fundo', [this.tilesetFundoCavernaAzul, this.tilesetFundoCavernaRoxa, this.tilesetFundoCavernaVerde, this.tilesetFundoCavernaVermelho, this.tilesetFundoCavernaAmarela, this.tilesetBlocosBordas])
    this.layerChao = this.tilemapMapa.createLayer('Chao', [this.tilesetBlocosCenarioVerde, this.tilesetBlocosCenarioAmarelo, this.tilesetBlocosCenarioVermelho, this.tilesetBlocosCenarioAzul, this.tilesetBlocosCenarioRoxo])
    this.layerParedes = this.tilemapMapa.createLayer('Paredes', [this.tilesetBlocosTeto])
    this.layerObstaculos = this.tilemapMapa.createLayer('Obstaculos', [this.tilesetBlocosMorte])

    // personagem:
    this.personagem = this.physics.add.sprite(2542, 2664, 'BenPlayer1')
    this.personagemLado = 'direita'

    // Portais:

    //Portal Verde para Roxo:
    this.portal1 = this.physics.add.sprite(2500,2130, 'Vazio')
    this.portal1.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagem, this.portal1, () => {
      this.cameras.main.fadeOut(100)
      this.personagem.x = 1981
      this.personagem.y = 2152
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })

    //Portal Roxo para Verde:
    this.portal2 = this.physics.add.sprite(2048, 2152, 'Vazio')
    this.portal2.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagem, this.portal2, () => {
      this.cameras.main.fadeOut(100)
      this.personagem.x = 2650
      this.personagem.y = 2150
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })

    this.portal3 = this.physics.add.sprite(4800, 2152, 'Vazio')
    this.portal3.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagem, this.portal3, () => {
      this.cameras.main.fadeOut(100)
      this.personagem.x = 5291
      this.personagem.y = 2132
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })

    this.portal4 = this.physics.add.sprite(5180, 2152, 'Vazio')
    this.portal4.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagem, this.portal4, () => {
      this.cameras.main.fadeOut(100)
      this.personagem.x = 4720
      this.personagem.y = 2132
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })

    this.portal5 = this.physics.add.sprite(3794, 1530, 'Vazio')
    this.portal5.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagem, this.portal5, () => {
      this.cameras.main.fadeOut(100)
      this.personagem.x = 3840
      this.personagem.y = 1000
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })

    this.portal6 = this.physics.add.sprite(3780, 1200, 'Vazio')
    this.portal6.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagem, this.portal6, () => {
      this.cameras.main.fadeOut(100)
      this.personagem.x = 3786
      this.personagem.y = 1680
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })
    
    //Portal Grama para Fogo:
    this.portal7 = this.physics.add.sprite(3980, 2800, 'Vazio')
    this.portal7.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagem, this.portal7, () => {
      this.cameras.main.fadeOut(100)
      this.personagem.x = 3984
      this.personagem.y = 3284
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })

    //Portal Fogo para Verde:
    this.portal8 = this.physics.add.sprite(3984, 3129, 'Vazio')
    this.portal8.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagem, this.portal8, () => {
      this.cameras.main.fadeOut(100)
      this.personagem.x = 4000
      this.personagem.y = 2630
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })


    // Detalhes
    this.layerDetalhes = this.tilemapMapa.createLayer('Detalhes', [this.tilesetPedrinhas, this.tilesetGramas, this.tilesetGramasAmarela, this.tilesetGramasAzul, this.tilesetGramasVermelho, this.tilesetGramasRoxo])

    // ANIMAÇÃO PERSONAGEM:

    // parado direita
    this.anims.create({
      key: 'BenPlayer1_parado_direita',
      frames: this.anims.generateFrameNumbers('BenPlayer1', { start: 0, end: 1 }),
      frameRate: 1,
      repeat: -1
    })

    // parado esquerda
    this.anims.create({
      key: 'BenPlayer1_parado_esquerda',
      frames: this.anims.generateFrameNumbers('BenPlayer1', { start: 4, end: 5 }),
      frameRate: 1,
      repeat: -1
    })

    // andando para direita
    this.anims.create({
      key: 'BenPlayer1_andando_direita',
      frames: this.anims.generateFrameNumbers('BenPlayer1', { start: 2, end: 3 }),
      frameRate: 2,
      repeat: -1
    })

    // andando para esquerda
    this.anims.create({
      key: 'BenPlayer1_andando_esquerda',
      frames: this.anims.generateFrameNumbers('BenPlayer1', { start: 6, end: 7 }),
      frameRate: 2,
      repeat: -1
    })

    // Pulando para direita:
    this.anims.create({
      key: 'BenPlayer1_pulando_direita',
      frames: this.anims.generateFrameNumbers('BenPlayer1', { start: 9, end: 9 }),
      frameRate: 1
    })

    // pulando para esquerda
    this.anims.create({
      key: 'BenPlayer1_pulando_esquerda',
      frames: this.anims.generateFrameNumbers('BenPlayer1', { start: 8, end: 8 }),
      frameRate: 1
    })

    // MOVIMENTÇÃO PERSONAGEM

    // Pulo

    this.cima = this.add.sprite(800, 375, 'cima', 0)
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => {
        this.cima.setFrame(1)
        if (this.personagem.body.blocked.down) {
          this.personagem.setVelocityY(-600)
          this.personagem.anims.play('BenPlayer1_pulando_' + this.personagemLado)
        }
      })
      .on('pointerout', () => {
        this.cima.setFrame(0)
        this.personagem.anims.play('BenPlayer1_parado_' + this.personagemLado)
      })

    // movimentação direita

    this.direita = this.add.sprite(200, 375, 'direita', 0)
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => {
        this.direita.setFrame(1)
        this.personagem.setVelocityX(250)
        this.personagemLado = 'direita'
        this.personagem.anims.play('BenPlayer1_andando_' + this.personagemLado)
      })
      .on('pointerout', () => {
        this.direita.setFrame(0)
        this.personagem.setVelocityX(0)
        this.personagem.anims.play('BenPlayer1_parado_' + this.personagemLado)
      })

    // Movimentação esquerda

    this.esquerda = this.add.sprite(64, 375, 'esquerda', 0)
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => {
        this.esquerda.setFrame(1)
        this.personagem.setVelocityX(-180)
        this.personagemLado = 'esquerda'
        this.personagem.anims.play('BenPlayer1_andando_' + this.personagemLado)
      })
      .on('pointerout', () => {
        this.esquerda.setFrame(0)
        this.personagem.setVelocityX(0)
        this.personagem.anims.play('BenPlayer1_parado_' + this.personagemLado)
      })

    // Ataque

    this.AtqEsp = this.add.sprite(800, 230, 'AtqEsp', 0)
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => { })
      .on('pointerout', () => { })

    // Habilidade

    this.HabFaca = this.add.sprite(670, 320, 'HabFaca', 0)
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => { })
      .on('pointerout', () => { })
    // colisão de personagem

    this.layerChao.setCollisionByProperty({ collides: true })
    this.physics.add.collider(this.personagem, this.layerChao)

    this.layerParedes.setCollisionByProperty({ collides: true })
    this.physics.add.collider(this.personagem, this.layerParedes)

    // após, segue o código para a criação da camera que irá serguir o personagem
    this.cameras.main.startFollow(this.personagem)
  }

  update () { }
}
