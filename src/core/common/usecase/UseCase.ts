/**
 * Use case interface
 */
export interface UseCase<TUseCasePort, TUseCaseResult> {
    exec(payload: TUseCasePort): Promise<TUseCaseResult>;
}