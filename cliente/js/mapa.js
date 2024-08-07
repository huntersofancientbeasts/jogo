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
    this.load.image('pedra', './assets/mapa/pedra.png')
    this.load.image('inicio', './assets/mapa/inicio.png')
    this.load.image('arenaboss', './assets/mapa/arenaboss.png')

    // Sprites Personagens e Monstros:
    this.load.spritesheet('LeoVen', './assets/personagens/LeoVen.png', { frameWidth: 48, frameHeight: 48 })
    this.load.spritesheet('BenVen', './assets/personagens/BenVen.png', { frameWidth: 48, frameHeight: 48 })
    this.load.spritesheet('BenAtirando', './assets/personagens/BenAtirando.png', { frameWidth: 64, frameHeight: 64 })
    this.load.spritesheet('LeoVenAtk', './assets/personagens/LeoVenAtk.png', { frameWidth: 64, frameHeight: 64 })
    this.load.spritesheet('monstro', './assets/personagens/monstro.png', { frameWidth: 64, frameHeight: 64 })
    this.load.spritesheet('ogrogelo', './assets/personagens/ogrogelo.png', { frameWidth: 128, frameHeight: 128 })
    this.load.spritesheet('boss', './assets/personagens/boss.png', { frameWidth: 86, frameHeight: 86 })
    this.load.spritesheet('dragaozinho', './assets/personagens/dragaozinho.png', { frameWidth: 64, frameHeight: 64 })

    // Sprites Altares e objetos:
    this.load.spritesheet('altarcristalamarelo', './assets/spritesmapa/altarcristalamarelo.png', { frameWidth: 64, frameHeight: 64 })
    this.load.spritesheet('altarcristalfogo', './assets/spritesmapa/altarcristalfogo.png', { frameWidth: 64, frameHeight: 64 })
    this.load.spritesheet('altarcristalgelo', './assets/spritesmapa/altarcristalgelo.png', { frameWidth: 64, frameHeight: 64 })
    this.load.spritesheet('altarcristalroxo', './assets/spritesmapa/altarcristalroxo.png', { frameWidth: 64, frameHeight: 64 })
    this.load.spritesheet('PortaBoss', './assets/spritesmapa/PortaBoss.png', { frameWidth: 96, frameHeight: 96 })

    // Sprites Botões
    this.load.spritesheet('cima', './assets/Controles/SetaCima.png', { frameWidth: 128, frameHeight: 128 })
    this.load.spritesheet('esquerda', './assets/Controles/SetaEsq.png', { frameWidth: 128, frameHeight: 128 })
    this.load.spritesheet('direita', './assets/Controles/SetaDir.png', { frameWidth: 128, frameHeight: 128 })
    this.load.spritesheet('barradevida', './assets/Controles/barradevida.png', { frameWidth: 128, frameHeight: 32 })
    this.load.spritesheet('AtqEsp', './assets/Controles/AtqEsp.png', { frameWidth: 128, frameHeight: 128 })
    this.load.spritesheet('HabFlecha', './assets/Controles/HabFlecha.png', { frameWidth: 128, frameHeight: 128 })
    this.load.spritesheet('HabDef', './assets/Controles/HabDef.png', { frameWidth: 128, frameHeight: 128 })
    this.load.spritesheet('AtqMac', './assets/Controles/AtqMac.png', { frameWidth: 128, frameHeight: 128 })
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
    this.tilesetpedra = this.tilemapMapa.addTilesetImage('pedra')
    this.tilesetinicio = this.tilemapMapa.addTilesetImage('inicio')
    this.tilesetarenaboss = this.tilemapMapa.addTilesetImage('arenaboss')

    // Layers
    this.layerFundo = this.tilemapMapa.createLayer('Fundo', [this.tilesetFundoCavernaAzul, this.tilesetFundoCavernaRoxa, this.tilesetFundoCavernaVerde, this.tilesetFundoCavernaVermelho, this.tilesetFundoCavernaAmarela, this.tilesetBlocosBordas, this.tilesetinicio, this.tilesetarenaboss])
    this.layerChao = this.tilemapMapa.createLayer('Chao', [this.tilesetBlocosCenarioVerde, this.tilesetBlocosCenarioAmarelo, this.tilesetBlocosCenarioVermelho, this.tilesetBlocosCenarioAzul, this.tilesetBlocosCenarioRoxo, this.tilesetpedra, this.tilesetBlocosTeto])
    this.layerParedes = this.tilemapMapa.createLayer('Paredes', [this.tilesetBlocosTeto, this.tilesetpedra])
    this.layerObstaculos = this.tilemapMapa.createLayer('Obstaculos', [this.tilesetBlocosMorte])

    // Porta do Boss:
    this.PortaBoss = this.physics.add.sprite(3606, 2595, 'PortaBoss')
    this.PortaBoss.body.setAllowGravity(false)
    this.PortaBoss.setScale(2)
    this.anims.create({
      key: 'PortaBoss',
      frames: this.anims.generateFrameNumbers('PortaBoss', { start: 0, end: 0 }),
      frameRate: 0,
      repeat: -1
    })

    // Altar Cristal Amarelo:
    this.altarcristalamarelo = this.physics.add.sprite(7113, 2600, 'altarcristalamarelo')
    this.altarcristalamarelo.body.setAllowGravity(false)
    this.anims.create({
      key: 'altarcristalamarelo',
      frames: this.anims.generateFrameNumbers('altarcristalamarelo', { start: 0, end: 0 }),
      frameRate: 0,
      repeat: -1
    })

    // Altar Cristal Fogo:
    this.altarcristalfogo = this.physics.add.sprite(3030, 4200, 'altarcristalfogo')
    this.altarcristalfogo.body.setAllowGravity(false)
    this.anims.create({
      key: 'altarcristalfogo',
      frames: this.anims.generateFrameNumbers('altarcristalfogo', { start: 0, end: 0 }),
      frameRate: 0,
      repeat: -1
    })

    // Altar Cristal Gelo:
    this.altarcristalgelo = this.physics.add.sprite(3798, 613, 'altarcristalgelo')
    this.altarcristalgelo.body.setAllowGravity(false)
    this.anims.create({
      key: 'altarcristalgelo',
      frames: this.anims.generateFrameNumbers('altarcristalgelo', { start: 0, end: 0 }),
      frameRate: 0,
      repeat: -1
    })

    // Altar Cristal Roxo:
    this.altarcristalroxo = this.physics.add.sprite(1623, 1570, 'altarcristalroxo')
    this.altarcristalroxo.body.setAllowGravity(false)
    this.anims.create({
      key: 'altarcristalroxo',
      frames: this.anims.generateFrameNumbers('altarcristalroxo', { start: 0, end: 0 }),
      frameRate: 0,
      repeat: -1
    })

    // Boss:
    this.boss = this.physics.add.sprite(1308, 3691, 'boss')
    this.boss.body.setAllowGravity(false)
    this.boss.setScale(2)
    this.anims.create({
      key: 'boss',
      frames: this.anims.generateFrameNumbers('boss', { start: 0, end: 0 }),
      frameRate: 0,
      repeat: -1
    })

    // ogrogelo:
    this.ogrogelo = this.physics.add.sprite(3316, 150, 'ogrogelo')
    this.ogrogelo.body.setAllowGravity(true)
    this.ogrogelo.setScale(0.9)
    this.anims.create({
      key: 'ogrogelo',
      frames: this.anims.generateFrameNumbers('ogrogelo', { start: 0, end: 0 }),
      frameRate: 0,
      repeat: -1
    })

    // dragaozinho:
    this.dragaozinho = this.physics.add.sprite(6918, 1950, 'dragaozinho')
    this.dragaozinho.body.setAllowGravity(false)
    this.anims.create({
      key: 'dragaozinho',
      frames: this.anims.generateFrameNumbers('dragaozinho', { start: 0, end: 0 }),
      frameRate: 0,
      repeat: -1
    })

    // dois players
    if (globalThis.game.jogadores.primeiro === globalThis.game.socket.id) {
      globalThis.game.remoteConnection = new RTCPeerConnection(globalThis.game.iceServers)
      globalThis.game.dadosJogo = globalThis.game.remoteConnection.createDataChannel('dadosJogo', { negotiated: true, id: 0 })

      globalThis.game.remoteConnection.onicecandidate = function ({ candidate }) {
        candidate && globalThis.game.socket.emit('candidate', globalThis.game.sala, candidate)
      }

      globalThis.game.remoteConnection.ontrack = function ({ streams: [midia] }) {
        globalThis.game.audio.srcObject = midia
      }

      if (globalThis.game.midias) {
        globalThis.game.midias.getTracks()
          .forEach((track) => globalThis.game.remoteConnection.addTrack(track, globalThis.game.midias))
      }

      globalThis.game.socket.on('offer', (description) => {
        globalThis.game.remoteConnection.setRemoteDescription(description)
          .then(() => globalThis.game.remoteConnection.createAnswer())
          .then((answer) => globalThis.game.remoteConnection.setLocalDescription(answer))
          .then(() => globalThis.game.socket.emit('answer', globalThis.game.sala, globalThis.game.remoteConnection.localDescription))
      })

      globalThis.game.socket.on('candidate', (candidate) => {
        globalThis.game.remoteConnection.addIceCandidate(candidate)
      })

      // Cria os sprites dos personagens local e remoto (LEO):
      this.personagemLocal = this.physics.add.sprite(5441, 1060, globalThis.game.personagemLocal)
      this.personagemRemoto = this.add.sprite(5480, 1060, globalThis.game.personagemRemoto)

      // Detalhes
      this.layerDetalhes = this.tilemapMapa.createLayer('Detalhes', [this.tilesetPedrinhas, this.tilesetGramas, this.tilesetGramasAmarela, this.tilesetGramasAzul, this.tilesetGramasVermelho, this.tilesetGramasRoxo])
    } else if (globalThis.game.jogadores.segundo === globalThis.game.socket.id) {
      globalThis.game.localConnection = new RTCPeerConnection(globalThis.game.iceServers)
      globalThis.game.dadosJogo = globalThis.game.localConnection.createDataChannel('dadosJogo', { negotiated: true, id: 0 })

      globalThis.game.localConnection.onicecandidate = function ({ candidate }) {
        candidate && globalThis.game.socket.emit('candidate', globalThis.game.sala, candidate)
      }

      globalThis.game.localConnection.ontrack = function ({ streams: [stream] }) {
        globalThis.game.audio.srcObject = stream
      }

      if (globalThis.game.midias) {
        globalThis.game.midias.getTracks()
          .forEach((track) => globalThis.game.localConnection.addTrack(track, globalThis.game.midias))
      }

      globalThis.game.localConnection.createOffer()
        .then((offer) => globalThis.game.localConnection.setLocalDescription(offer))
        .then(() => globalThis.game.socket.emit('offer', globalThis.game.sala, globalThis.game.localConnection.localDescription))

      globalThis.game.socket.on('answer', (description) => {
        globalThis.game.localConnection.setRemoteDescription(description)
      })

      globalThis.game.socket.on('candidate', (candidate) => {
        globalThis.game.localConnection.addIceCandidate(candidate)
      })

      // Cria os sprites dos personagens local e remoto (BEN):
      this.personagemLocal = this.physics.add.sprite(5480, 1060, globalThis.game.personagemLocal)
      this.personagemRemoto = this.add.sprite(5441, 1060, globalThis.game.personagemRemoto)

      // Detalhes
      this.layerDetalhes = this.tilemapMapa.createLayer('Detalhes', [this.tilesetPedrinhas, this.tilesetGramas, this.tilesetGramasAmarela, this.tilesetGramasAzul, this.tilesetGramasVermelho, this.tilesetGramasRoxo])
    }

    if (this.personagemLocal.texture.key === 'LeoVen') {
      // Ataques LEO:

      this.anims.create({
        key: 'atacando_esquerda',
        frames: this.anims.generateFrameNumbers('LeoVenAtk', { start: 1, end: 5 }),
        frameRate: 8
      })

      this.anims.create({
        key: 'atacando_direita',
        frames: this.anims.generateFrameNumbers('LeoVenAtk', { start: 7, end: 11 }),
        frameRate: 8
      })

      this.anims.create({
        key: 'defendendo_esquerda',
        frames: this.anims.generateFrameNumbers('LeoVenAtk', { start: 12, end: 19 }),
        frameRate: 8
      })

      this.anims.create({
        key: 'defendendo_direita',
        frames: this.anims.generateFrameNumbers('LeoVenAtk', { start: 20, end: 27 }),
        frameRate: 8
      })

      this.HabDef = this.add.sprite(670, 320, 'HabDef', 0) 
        .setScrollFactor(0)
        .setInteractive()
        .on('pointerover', () => { 
          this.HabDef.setFrame(1)
          this.personagemLocal.setVelocityX(0)
          this.personagemLocal.anims.play('defendendo_' + this.personagemLado)
        })
        .on('pointerout', () => { 
          this.HabDef.setFrame(0)
          this.personagemLocal.setVelocityX(0)
          this.personagemLocal.anims.play('parado_' + this.personagemLado)
        })

      this.AtqMac = this.add.sprite(800, 240, 'AtqMac', 0)
        .setScrollFactor(0)
        .setInteractive()
        .on('pointerover', () => {
          this.AtqMac.setFrame(1)
          this.personagemLocal.setVelocityX(0)
          this.personagemLocal.anims.play('atacando_' + this.personagemLado)
          this.tilemapMapahis.personagemLocal.body.setOffset(0, 8)
          this.personagemLocal.body.setBodySize(64, 64, true)
        })
        .on('pointerout', () => {
          this.AtqMac.setFrame(0)
          this.personagemLocal.setVelocityX(0)
          this.personagemLocal.anims.play('parado_' + this.personagemLado)
          this.tilemapMapahis.personagemLocal.body.setOffset(0, 0)
          this.personagemLocal.body.setBodySize(48, 48, true)
        })
    } else if (this.personagemLocal.texture.key === 'BenVen') {
      // Ataques BEN:

      this.anims.create({
        key: 'atirando_esquerda',
        frames: this.anims.generateFrameNumbers('BenAtirando', { start: 0, end: 7 }),
        frameRate: 8
      })

      this.anims.create({
        key: 'atirando_direita',
        frames: this.anims.generateFrameNumbers('BenAtirando', { start: 8, end: 15 }),
        frameRate: 8
      })

      this.HabFlecha = this.add.sprite(670, 320, 'HabFlecha', 0)
        .setScrollFactor(0)
        .setInteractive()
        .on('pointerover', () => {
          this.HabFlecha.setFrame(1)
          this.personagemLocal.setVelocityX(0)
          this.personagemLocal.anims.play('atirando_' + this.personagemLado)
        })
        .on('pointerout', () => {
          this.HabFlecha.setFrame(0)
          this.personagemLocal.setVelocityX(0)
          this.personagemLocal.anims.play('parado_' + this.personagemLado)
        })

      this.AtqEsp = this.add.sprite(800, 240, 'AtqEsp', 0)
        .setScrollFactor(0)
        .setInteractive()
        .on('pointerover', () => { })
        .on('pointerout', () => { })
    }

    this.barradevida = this.add.sprite(80, 30, 'barradevida', 0)
      .setScrollFactor(0)

    this.personagemLocalLado = 'direita'

    // PORTAIS:

    // Portal Verde para Roxo:
    this.portal1 = this.physics.add.sprite(2500, 2130, 'Vazio')
    this.portal1.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagemLocal, this.portal1, () => {
      this.cameras.main.fadeOut(100)
      this.personagemLocal.x = 1981
      this.personagemLocal.y = 2152
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })

    // Portal Roxo para Verde:
    this.portal2 = this.physics.add.sprite(2048, 2152, 'Vazio')
    this.portal2.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagemLocal, this.portal2, () => {
      this.cameras.main.fadeOut(100)
      this.personagemLocal.x = 2650
      this.personagemLocal.y = 2150
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })

    // Portal Verde para Amarelo:
    this.portal3 = this.physics.add.sprite(4800, 2152, 'Vazio')
    this.portal3.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagemLocal, this.portal3, () => {
      this.cameras.main.fadeOut(100)
      this.personagemLocal.x = 5291
      this.personagemLocal.y = 2132
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })

    // Portal Amarelo para Verde:
    this.portal4 = this.physics.add.sprite(5180, 2152, 'Vazio')
    this.portal4.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagemLocal, this.portal4, () => {
      this.cameras.main.fadeOut(100)
      this.personagemLocal.x = 4720
      this.personagemLocal.y = 2132
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })

    // Portal Verde para Gelo:
    this.portal5 = this.physics.add.sprite(3794, 1530, 'Vazio')
    this.portal5.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagemLocal, this.portal5, () => {
      this.cameras.main.fadeOut(100)
      this.personagemLocal.x = 3840
      this.personagemLocal.y = 1000
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })

    // Portal Gelo para Verde:
    this.portal6 = this.physics.add.sprite(3780, 1200, 'Vazio')
    this.portal6.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagemLocal, this.portal6, () => {
      this.cameras.main.fadeOut(100)
      this.personagemLocal.x = 3786
      this.personagemLocal.y = 1680
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })

    // Portal Grama para Fogo:
    this.portal7 = this.physics.add.sprite(3980, 2800, 'Vazio')
    this.portal7.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagemLocal, this.portal7, () => {
      this.cameras.main.fadeOut(100)
      this.personagemLocal.x = 3984
      this.personagemLocal.y = 3284
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })

    // Portal Fogo para Verde:
    this.portal8 = this.physics.add.sprite(3984, 3129, 'Vazio')
    this.portal8.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagemLocal, this.portal8, () => {
      this.cameras.main.fadeOut(100)
      this.personagemLocal.x = 4000
      this.personagemLocal.y = 2630
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })

    // Portal inicio para Verde:
    this.portal8 = this.physics.add.sprite(6577, 1030, 'Vazio')
    this.portal8.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagemLocal, this.portal8, () => {
      this.cameras.main.fadeOut(100)
      this.personagemLocal.x = 2640
      this.personagemLocal.y = 2660
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })

    // Portal verde para inicio:
    this.portal8 = this.physics.add.sprite(2543, 2660, 'Vazio')
    this.portal8.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagemLocal, this.portal8, () => {
      this.cameras.main.fadeOut(100)
      this.personagemLocal.x = 6500
      this.personagemLocal.y = 1060
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })

    /* Portal verde para boss:
    this.portal8 = this.physics.add.sprite(3606, 2664, 'Vazio')
    this.portal8.body.setAllowGravity(false)
    this.physics.add.overlap(this.personagemLocal, this.portal8, () => {
      this.cameras.main.fadeOut(100)
      this.personagemLocal.x = 682
      this.personagemLocal.y = 3580
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    })
  */

    // Morte do Personagem:
    this.physics.add.collider(this.personagemLocal, this.layerObstaculos, () => {
      this.barradevida.setFrame(this.barradevida.frame.name + 1)
      if (this.barradevida.frame.name === 5) {
        this.scene.stop('mapa')
        this.scene.start('finalTriste')
      }
      this.cameras.main.fadeOut(100)
      this.personagemLocal.x = 2640
      this.personagemLocal.y = 2660
      this.cameras.main.once('camerafadeoutcomplete', (camera) => {
        camera.fadeIn(100)
      })
    }, null, this)

    // ANIMAÇÃO PERSONAGEM:

    // parado direita
    this.anims.create({
      key: 'parado_direita',
      frames: this.anims.generateFrameNumbers(this.personagemLocal.texture.key, { start: 5, end: 9 }),
      frameRate: 2,
      repeat: -1
    })

    // parado esquerda
    this.anims.create({
      key: 'parado_esquerda',
      frames: this.anims.generateFrameNumbers(this.personagemLocal.texture.key, { start: 0, end: 4 }),
      frameRate: 2,
      repeat: -1
    })

    // andando para direita
    this.anims.create({
      key: 'andando_direita',
      frames: this.anims.generateFrameNumbers(this.personagemLocal.texture.key, { start: 20, end: 27 }),
      frameRate: 8,
      repeat: -1
    })

    // andando para esquerda
    this.anims.create({
      key: 'andando_esquerda',
      frames: this.anims.generateFrameNumbers(this.personagemLocal.texture.key, { start: 11, end: 18 }),
      frameRate: 8,
      repeat: -1
    })

    // Pulando para direita:
    this.anims.create({
      key: 'pulando_direita',
      frames: this.anims.generateFrameNumbers(this.personagemLocal.texture.key, { start: 33, end: 37 }),
      frameRate: 8
    })

    // pulando para esquerda
    this.anims.create({
      key: 'pulando_esquerda',
      frames: this.anims.generateFrameNumbers(this.personagemLocal.texture.key, { start: 28, end: 32 }),
      frameRate: 8
    })

    // MOVIMENTÇÃO PERSONAGEM

    // Pulo

    this.cima = this.add.sprite(800, 375, 'cima', 0)
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => {
        this.cima.setFrame(1)
        if (this.personagemLocal.body.blocked.down) {
          this.personagemLocal.setVelocityY(-600)
          this.personagemLocal.anims.play('pulando_' + this.personagemLado)
        }
      })
      .on('pointerout', () => {
        this.cima.setFrame(0)
      })

    // movimentação direita

    this.direita = this.add.sprite(200, 375, 'direita', 0)
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => {
        this.direita.setFrame(1)
        this.personagemLocal.setVelocityX(200)
        this.personagemLado = 'direita'
        this.personagemLocal.anims.play('andando_' + this.personagemLado)
      })
      .on('pointerout', () => {
        this.direita.setFrame(0)
        this.personagemLocal.setVelocityX(0)
        this.personagemLocal.anims.play('parado_' + this.personagemLado)
      })

    // Movimentação esquerda

    this.esquerda = this.add.sprite(64, 375, 'esquerda', 0)
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => {
        this.esquerda.setFrame(1)
        this.personagemLocal.setVelocityX(-200)
        this.personagemLado = 'esquerda'
        this.personagemLocal.anims.play('andando_' + this.personagemLado)
      })
      .on('pointerout', () => {
        this.esquerda.setFrame(0)
        this.personagemLocal.setVelocityX(0)
        this.personagemLocal.anims.play('parado_' + this.personagemLado)
      })

    // Animação Ogrogelo:
    this.anims.create({
      key: 'ogrogelo_andando_direita',
      frames: this.anims.generateFrameNumbers('ogrogelo', { start: 1, end: 4 }),
      frameRate: 8,
      repeat: -1
    })

    this.ogrogelo.anims.play('ogrogelo_andando_direita')
    this.ogrogelo.setVelocityX(70)

    this.anims.create({
      key: 'ogrogelo_andando_esquerda',
      frames: this.anims.generateFrameNumbers('ogrogelo', { start: 10, end: 13 }),
      frameRate: 8,
      repeat: -1
    })
    this.ogrogelo.anims.play('ogrogelo_andando_esquerda')
    this.ogrogelo.setVelocityX(-70)

    this.ogros = [
      {
        x: 3316,
        y: 150,
        sprite: 'ogrogelo'
      },
      {
        x: 3636,
        y: 230
      }
    ]
    this.ogros.forEach((ogro) => {
      ogro.objeto = this.physics.add.sprite(ogro.x, ogro.y, ogro.sprite)

      ogro.blocoDireita = this.physics.add.sprite(3636, 230, 'Vazio')
      ogro.blocoDireita.body
        .setAllowGravity(false)
        .setImmovable(true)
      this.physics.add.collider(ogro.objeto, ogro.blocoDireita, () => {
        ogro.objeto.anims.play(ogro.sprite + '_andando_esquerda')
        ogro.objeto.setVelocityX(-70)
      })

      ogro.blocoEsquerda = this.physics.add.sprite(3130, 230, 'Vazio')
      ogro.blocoEsquerda.body
        .setAllowGravity(false)
        .setImmovable(true)
      this.physics.add.collider(ogro.objeto, ogro.blocoEsquerda, () => {
        ogro.objeto.anims.play(ogro.sprite + '_andando_direita')
        ogro.objeto.setVelocityX(70)
      })
    })

    // colisão de personagens:

    this.layerChao.setCollisionByProperty({ collides: true })
    this.physics.add.collider(this.personagemLocal, this.layerChao)
    this.physics.add.collider(this.ogrogelo, this.layerChao)

    this.layerParedes.setCollisionByProperty({ collides: true })
    this.physics.add.collider(this.personagemLocal, this.layerParedes)
    this.physics.add.collider(this.ogrogelo, this.layerParedes)

    this.physics.add.collider(this.ogrogelo, this.personagemLocal, () => {
      this.barradevida.setFrame(this.barradevida.frame.name + 1)
      if (this.barradevida.frame.name === 5) {
        this.scene.stop('mapa')
        this.scene.start('finalTriste')
      }
    }, null, this)

    this.layerObstaculos.setCollisionByProperty({ collides: true })
    this.physics.add.collider(this.personagemLocal, this.layerObstaculos, () => {
      this.barradevida.setFrame(this.barradevida.frame.name + 1)
      if (this.barradevida.frame.name === 5) {
        this.scene.stop('mapa')
        this.scene.start('finalTriste')
      }
    }, null, this)

    // colisão do ogrogelo:
    this.layerChao.setCollisionByProperty({ collides: true })
    this.physics.add.collider(this.ogrogelo, this.layerChao)

    // após, segue o código para a criação da camera que irá serguir o personagem
    this.cameras.main.startFollow(this.personagemLocal)

    globalThis.game.dadosJogo.onmessage = (event) => {
      const dados = JSON.parse(event.data)

      // Verifica se os dados recebidos contêm informações sobre o personagem
      if (dados.personagem) {
        this.personagemRemoto.x = dados.personagem.x
        this.personagemRemoto.y = dados.personagem.y
        this.personagemRemoto.setFrame(dados.personagem.frame)
      }
    }
  }

  update () {
    // Alguns frames podem estar (ainda) sem personagem ou nuvem,
    // por isso é necessário verificar se existem antes de enviar
    try {
      // Envia os dados do jogo somente se houver conexão aberta
      if (globalThis.game.dadosJogo.readyState === 'open') {
        // Verifica que o personagem local existe
        if (this.personagemLocal) {
          // Envia os dados do personagem local via DataChannel
          globalThis.game.dadosJogo.send(JSON.stringify({
            personagem: {
              x: this.personagemLocal.x,
              y: this.personagemLocal.y,
              frame: this.personagemLocal.frame.name
            }
          }))
        }
      }
    } catch (e) {
      console.log('Erro ao enviar dados do jogo: ', e)
    }
  }
}
