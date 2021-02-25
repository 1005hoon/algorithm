
/**
챔피언
- 이름
- 레벨
- 베이스 공격력
- 베이스 방어력
- 체력
- 마나/기력
- 스킬 포인트

스킬
- 스킬 이름
- 스킬 레벨
- 스킬 데미지
- 스킬 코스트
- 타겟
- 공격 유형
- 적중율
*/

class Champion {
  constructor(name, dmg, def, hp, mp, sp = 1) {
    this.name = name;
    this.dmg = dmg;
    this.def = def;
    this.hp = hp;
    this.mp = mp;
    this.sp = sp
  }

  baseAttack(target) {
    const damage = this.dmg - target.def;
    return `${this.name}: attacked ${target.name} and caused ${damage}`
  }

  
}