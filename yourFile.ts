/**
 * 學生名字驗證器
 * @param userName 學生名字
 * tku ee 0117
 * ee 科系縮寫
 * 0117 四碼
 * 座號檢查，跟之前有重複就噴錯  只能寫沒重複的號碼
 */
class Validator {
    public async userNameValidator(userName: string): Promise<
    '學生名字格式不正確，應為 tku + 科系縮寫 + 四碼座號，例如: tkubm1760' | '座號已存在' | '校名必須為 tku' | '座號格式不正確，必須為四位數字。' | '驗證通過'
    > {

        if (userName.length < 7) { 
            return '學生名字格式不正確，應為 tku + 科系縮寫 + 四碼座號，例如: tkubm1760';
        }

        const info = this.userNameFormator(userName);

        if (info.schoolName !== 'tku') {
            return '校名必須為 tku';
        }

        const seatNumberPattern = /^\d{4}$/; // 驗證4個數字

        if (!seatNumberPattern.test(info.seatNumber)) {
            return '座號格式不正確，必須為四位數字。';
        }

        if (await this.existingSeatNumbers(info.seatNumber)) {
            return '座號已存在';
        }

        return '驗證通過';
    }

    private async existingSeatNumbers(seatNumber: string): Promise<boolean> {
        // Implement the logic to check if the seat number already exists
        // For now, let's assume it returns false
        return false;
    }

    private userNameFormator(userName: string): { schoolName: string, seatNumber: string } {
        // Implement the logic to format the userName and extract schoolName and seatNumber
        // For now, let's assume it returns a dummy object
        return { schoolName: 'tku', seatNumber: '0000' };
    }
}
