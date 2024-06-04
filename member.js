function skillsMember() {
    return {
        retrict: 'E',
        templateUrl: 'app/views/skills-member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'skillsMemberCtrl',
        bindToController: true,
        scope: {
            member: '='
        }
    }
}